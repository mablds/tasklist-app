'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      title: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      priority: {
        type: Sequelize.INTEGER
      },
      remind_me_on: {
        type: Sequelize.DATE
      },
      activity_type: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      task_list: {
        type: Sequelize.UUID
      },
      tags: {
        type: Sequelize.UUID
      },
      active: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Tasks');
  }
};