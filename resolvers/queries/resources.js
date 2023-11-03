import Sequelize from 'sequelize'
import models, { sequelize } from '../../models/index.js'
import compact from 'lodash/compact.js'
import pickBy from 'lodash/pickBy.js'
const { Resource, Tag, Availability } = models;
const { Op } = Sequelize;

const resourcesResolver = async (_parent, args, context) => {
  const { lat, lon, bounds, maxDistance = 5, tags, open } = args;
  const { n, s, e, w } = bounds || {}
  const date = open ? new Date(open) : new Date()
  const timeStringWZone = date.toTimeString().replace(/\sGMT/ig, '').replace(/ *\([^)]*\) */g, '')

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
      pickBy({
        model: Availability,
        as: 'schedule',
        where: !!open && {
          [Op.or]: [
            {
              [Op.and] : {
                weekday: date.getDay(),
                startTime: {
                  [Op.lt]: timeStringWZone
                },
                endTime: {
                  [Op.gt]: timeStringWZone
                }
              },
            },
            {
              [Op.and] : {
                startDatetime: {
                  [Op.lt]: date
                },
                endDatetime: {
                  [Op.gt]: date
                }
              },
            },
          ]
        },
        required: !!open,
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
