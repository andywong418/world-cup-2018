'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'rounds',
      {
        id: {
          type: Sequelize.INTEGER,
          field: 'id',
          primaryKey: true,
          unique: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.TEXT,
          field: 'title',
          unique: true
        },
        knockOutStage: {
          type: Sequelize.BOOLEAN,
          field: 'knockOutStage'
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
    return queryInterface.dropTable('rounds')
  }
}
