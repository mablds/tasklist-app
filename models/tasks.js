'use strict';

const uuid = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tasks extends Model {

    static associate(models) {
      
    }
  };
  Tasks.init({
    title: DataTypes.STRING,
    notes: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    remind_me_on: DataTypes.DATE,
    activity_type: DataTypes.ENUM,
    status: DataTypes.ENUM,
    task_list: DataTypes.INTEGER,
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