// import Sequelize from 'sequelize'
import models, { sequelize } from '../../models/index.js'
const { Tag } = models;
// const { Op } = Sequelize;

const tagsResolver = async (_parent, args, context) => {
  const tags = await Tag.findAll()

  return tags
};

export default tagsResolver;
