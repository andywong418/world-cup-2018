'use strict'
const games = require('../static/games')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('games', games, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('games', null, {})
  }
}
