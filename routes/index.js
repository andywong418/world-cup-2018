var express = require('express')
var router = express.Router()
const models = require('../models')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/games', (req, res) => {
  let queryObj = {
    $and: {
      team1: {
        $ne: null
      },
      team2: {
        $ne: null
      }
    }
  }
  
  const team1 = req.query.team1
  const team2 = req.query.team2
  const team = req.query.team
  if (team1) {
    queryObj.team1 = team1
  }
  if (team2) {
    queryObj.team2 = team2
  }
  if (team) {
    queryObj = {
      $or: [
        {
          team1: team
        },
        {
          team2: team
        }
      ]
    }
  }
  models.games.findAll({
    where: queryObj
  }).then(games => {
    res.send(games)
  }).catch(err => {
    throw new Error(err)
  })
})

router.get('/game/:id', (req, res) => {
  const gameId = req.params.id
  models.games.findById(gameId)
    .then(game => {
      res.send(game)
    }).catch(err => {
      throw new Error(err)
    })
})
router.get('/teams', (req, res) => {
  models.teams.findAll()
    .then(teams => {
      res.send(teams)
    }).catch(err => {
      throw new Error(err)
    })
})

module.exports = router
