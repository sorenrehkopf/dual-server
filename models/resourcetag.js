'use strict';
import sequelize from 'sequelize';
const { Model } = sequelize;

export default (sequelize, DataTypes) => {
  class ResourceTag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  ResourceTag.init({
    resourceId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ResourceTag',
  });

  return ResourceTag;
};
