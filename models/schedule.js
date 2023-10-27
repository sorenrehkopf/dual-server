'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Schedule.init({
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
    modelName: 'Schedule',
  });
  return Schedule;
};
