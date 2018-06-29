'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'bets',
      {
        id: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        bettingTeam: {
          type: Sequelize.TEXT,
          field: 'bettingTeam'
        },
        matchId: {
          type: Sequelize.INTEGER,
          field: 'matchId'
        },
        email: {
          type: Sequelize.TEXT,
          field: 'email'
        },
        name: {
          type: Sequelize.TEXT,
          field: 'name'
        },
        destinationTag: {
          type: Sequelize.TEXT,
          field: 'destinationTag'
        },
        txHash: {
          type: Sequelize.TEXT,
          field: 'txHash'
        },
        amount: {
          type: Sequelize.INTEGER,
          field: 'amount'
        },
        opposingBet: {
          type: Sequelize.TEXT,
          field: 'opposingBet'
        },
        created_at: {
          type: Sequelize.DATE,
          field: 'created_at',
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')
        },
        updated_at: {
          type: Sequelize.DATE,
          field: 'updated_at',
          allowNull: false,
          defaultValue: Sequelize.fn('NOW')
        },
        deleted_at: {
          type: Sequelize.DATE,
          field: 'deleted_at'
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('bets')
  }
}
