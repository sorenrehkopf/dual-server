'use strict';
import sequelize from 'sequelize';
const { Model } = sequelize;

export default (sequelize, DataTypes) => {
  class Availability extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Resource, { as: 'resource' })
    }
  }
  Availability.init({
    resourceId: DataTypes.INTEGER,
    type: DataTypes.ENUM('once', 'weekly', 'monthly', 'rotating', 'cancellation'),
    startDatetime: DataTypes.DATE,
    endDatetime: DataTypes.DATE,
    weekday: DataTypes.INTEGER,
    interval: DataTypes.INTEGER,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Availability',
    tableName: 'Availabilities',
  });
  return Availability;
};
