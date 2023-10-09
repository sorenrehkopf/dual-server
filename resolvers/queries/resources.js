import models, { sequelize } from '../../models/index.js';

const { Resource } = models;

const resourcesResolver = async (_parent, args, context) => {
  const { lat, lon } = args;

  const resources = await Resource.scope({
    method: ['withDistance', lat, lon, 5]
  }).findAll({
    benchmark: true,
    attributes: ['name', 'description', 'address', 'lat', 'lon', 'distance'],
    order: sequelize.col('distance'),
  });

  return resources;
};

export default resourcesResolver;
