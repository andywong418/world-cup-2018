'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'games',
      {
        id: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        round: {
          type: Sequelize.STRING,
          references: {
            model: 'rounds',
            key: 'title'
          }
        },
        team1: {
          type: Sequelize.TEXT,
          references: {
            model: 'teams',
            key: 'team'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        team2: {
          type: Sequelize.TEXT,
          references: {
            model: 'teams',
            key: 'team'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
        },
        team1Score: {
          type: Sequelize.INTEGER,
          field: 'team1Score'
        },
        team2Score: {
          type: Sequelize.INTEGER,
          field: 'team2Score'
        },
        matchTime: {
          type: Sequelize.DATE,
          field: 'matchTime'
        },
        winner: {
          type: Sequelize.TEXT,
          references: {
            model: 'teams',
            key: 'team'
          },
          onUpdate: 'cascade',
          onDelete: 'cascade'
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
    return queryInterface.dropTable('games')
  }
}
