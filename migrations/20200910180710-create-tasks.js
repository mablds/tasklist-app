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
        allowNull: false,
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
        type: Sequelize.ENUM,
        values: ['indoors', 'outdoors']
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['open', 'done']
      },
      task_list: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "TaskLists", key: "id" }
      },
      active: {
        allowNull: false,
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