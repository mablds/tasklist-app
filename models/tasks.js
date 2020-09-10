'use strict';

const uuid = require('uuid/v4');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tasks.init({
    title: DataTypes.STRING,
    notes: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    remind_me_on: DataTypes.DATE,
    activity_type: DataTypes.STRING,
    status: DataTypes.STRING,
    task_list: DataTypes.INTEGER,
    tags: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tasks',
  });
  Tasks.beforeCreate((tasks, _) => {
    return tasks.id = uuid();
  })
  return Tasks;
};