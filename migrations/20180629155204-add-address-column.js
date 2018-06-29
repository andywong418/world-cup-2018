'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('bets', 'address', {
      type: Sequelize.TEXT
    })
  },

  down: (queryInterface, Sequelize) => {
    return Sequelize.removeColumn('bets', 'address')
  }
}
