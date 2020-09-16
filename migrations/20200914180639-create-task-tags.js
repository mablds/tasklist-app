'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('TaskTags', {
      id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      task_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "Tasks", key: "id" }
      },
      tag_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: { model: "Tags", key: "id" }
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
    await queryInterface.dropTable('TaskTags');
  }
};