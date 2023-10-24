'use strict';
import sequelize from 'sequelize';
import pickBy from 'lodash/pickBy.js'
const { Model } = sequelize;

const GEO_MILES = 3959
const GEO_KM = 6371

export default (sequelize, DataTypes) => {
  class Resource extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Tag, { through: 'ResourceTags', foreignKey: 'tagId' })
    }
  };
  Resource.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    address: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lon: DataTypes.FLOAT,
    distance: DataTypes.VIRTUAL,
  }, {
    sequelize,
    modelName: 'Resource',
    scopes: {
      withDistance(lat, lon, distance, unit = "m") {
        const constant = unit == "m" ? GEO_MILES : GEO_KM;
        const haversine = `(
            ${constant} * acos(
                cos(radians(${lat}))
                * cos(radians(lat))
                * cos(radians(lon) - radians(${lon}))
                + sin(radians(${lat})) * sin(radians(lat))
            )
        )`;

        return pickBy({
            attributes: [
                [sequelize.literal(haversine), 'distance'],
            ],
            where: !!distance && sequelize.literal(`${haversine} <= ${distance}`)
        })
      }
    }
  });

  return Resource;
};
