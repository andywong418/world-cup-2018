
const teams = require('../static/teams')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('teams', teams, {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('teams', null, {})
  }
}
