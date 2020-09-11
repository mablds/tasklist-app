'use strict';

const uuid = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TaskLists extends Model {

    static associate(models) {
      
    }
  };
  TaskLists.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TaskLists',
  });

  TaskLists.beforeCreate((taskList, _) => {
    // Before Creating, uuid is generated using the uuid lib and returned to Sequelize Object id's
    return taskList.id = uuid.v4();
  })

  return TaskLists;
};