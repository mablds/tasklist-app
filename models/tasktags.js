'use strict';

const uuid = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskTags extends Model {
    static associate({ Tasks, Tags }) {
      TaskTags.belongsTo(Tasks, { foreignKey: "task_id" }) // N * M > TaskTags
      TaskTags.belongsTo(Tags, { foreignKey: "tag_id" }) // 1 * N > TaskTags
    }
  };
  TaskTags.init({
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TaskTags',
  });

  TaskTags.beforeCreate((tasktags, _) => {
    // Before Creating, uuid is generated using the uuid lib and returned to Sequelize Object id's
    return tasktags.id = uuid.v4();
  })

  return TaskTags;
};