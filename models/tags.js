'use strict';

const uuid = require('uuid/v4');

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tags.init({
    name: DataTypes.STRING,
    count: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tags',
  });
  Tags.beforeCreate((tags, _) => {
    return tags.id = uuid();
  })
  return Tags;
};