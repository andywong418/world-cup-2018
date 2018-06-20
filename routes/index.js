var express = require('express')
var router = express.Router()
const models = require('../models')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/games', (req, res) => {
  models.games.findAll({
    where: {
      team1: {
        $ne: null
      },
      team2: {
        $ne: null
      }
    }
  }).then(games => {
    res.send(games)
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
