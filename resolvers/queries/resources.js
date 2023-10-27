import Sequelize from 'sequelize'
import models, { sequelize } from '../../models/index.js'
import compact from 'lodash/compact.js'
import pickBy from 'lodash/pickBy.js'
const { Resource, Tag } = models;
const { Op } = Sequelize;

const resourcesResolver = async (_parent, args, context) => {
  const { lat, lon, bounds, maxDistance = 5, tags, open } = args;
  const { n, s, e, w } = bounds || {}

  console.log('yeah!!!!!!!!', open)

  const resources = await Resource.scope({
    method: compact(['withDistance', lat, lon, !bounds && maxDistance])
  }).findAll(pickBy({
    benchmark: true,
    attributes: ['id', 'name', 'description', 'address', 'lat', 'lon', 'distance'],
    order: sequelize.col('distance'),
    include: [
      pickBy({
        model: Tag,
        as: 'tags',
        where: !!tags && {
          name: tags
        },
        required: !!tags,
      }),
    ],
    where: !!bounds && {
      [Op.and]: [
        { lat: { [Op.between]: [s, n] } },
        { lon: { [Op.between]: [w, e] } },
      ]
    }
  }));

  console.log(
    'the resources!!!!!!!!!!!!!!!!!!',
    resources.map(({ dataValues }) => dataValues)
  )

  return resources;
};

export default resourcesResolver;
