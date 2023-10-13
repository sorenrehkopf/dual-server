import Sequelize from 'sequelize'
import models, { sequelize } from '../../models/index.js'
import compact from 'lodash/compact.js'
import pickBy from 'lodash/pickBy.js'
const { Resource } = models;
const { Op } = Sequelize;

const resourcesResolver = async (_parent, args, context) => {
  const { lat, lon, bounds, maxDistance = 5 } = args;
  const { n, s, e, w } = bounds || {}

  console.log('the bounds!', bounds)
  const resources = await Resource.scope({
    method: compact(['withDistance', lat, lon, !bounds && maxDistance])
  }).findAll(pickBy({
    benchmark: true,
    attributes: ['name', 'description', 'address', 'lat', 'lon', 'distance'],
    order: sequelize.col('distance'),
    where: !!bounds && {
      [Op.and]: [
        { lat: { [Op.between]: [s, n] } },
        { lon: { [Op.between]: [w, e] } },
      ]
    }
  }));

  console.log(
    resources.map(({ dataValues: { lat, lon } }) => `${lat} - ${lon}`)
  )

  return resources;
};

export default resourcesResolver;
