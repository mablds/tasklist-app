'use strict';

const uuid = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {

    static associate({ TaskLists, Tags, TaskTags }) {
      Tasks.belongsTo(TaskLists, { foreignKey: "task_list" }) // 1 * N > TaskLists
      Tasks.hasMany(TaskTags, { foreignKey: "task_id" })
    }
  };

  Tasks.init({
    title: DataTypes.STRING,
    notes: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    remind_me_on: DataTypes.DATE,
    activity_type: {
      type: DataTypes.ENUM,
      values: ['indoors', 'outdoors']
    },
    status: {
      type: DataTypes.ENUM,
      values: ['open', 'done']
    },
    task_list: {
      type: DataTypes.UUID,
    },
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });

  Tasks.beforeCreate((tasks, _) => {
    // Before Creating, uuid is generated using the uuid lib and returned to Sequelize Object id's
    return tasks.id = uuid.v4();
  })

  return Tasks;
};