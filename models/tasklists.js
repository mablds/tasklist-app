'use strict';

const uuid = require('uuid/v4');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaskLists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    return taskList.id = uuid();
  })
  return TaskLists;
};