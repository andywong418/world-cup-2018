'use strict';
const rounds = require('../static/rounds')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('rounds', rounds, {})
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('rounds', null, {})
    
  }
};
