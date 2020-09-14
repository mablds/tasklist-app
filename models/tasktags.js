'use strict';

const uuid = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskTags extends Model {
    static associate(models) {
      // define association here
    }
  };
  TaskTags.init({
    task_id: DataTypes.UUID,
    tag_id: DataTypes.UUID,
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