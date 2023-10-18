'use strict';
import sequelize from 'sequelize';
const { Model } = sequelize;

export default (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tag.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};
