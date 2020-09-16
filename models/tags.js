'use strict';

const uuid = require('uuid');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {

    static associate({ TaskTags, Tasks }) {
      Tags.hasMany(TaskTags, { foreignKey: "tag_id" }) // 1 * N > TaskTags
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
    // Before Creating, uuid is generated using the uuid lib and returned to Sequelize Object id's
    return tags.id = uuid.v4();
  })
  
  return Tags;
};