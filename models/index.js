import Sequelize from 'sequelize';
//Models
import User from './user.js';
import Resource from './resource.js'
import Tag from './tag.js'
import Availability from './availability.js'
import ResourceTag from './resourcetag.js'

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);

const models = {
  User: User(sequelize, Sequelize.DataTypes, Sequelize.model),
  Resource: Resource(sequelize, Sequelize.DataTypes, Sequelize.model),
  Tag: Tag(sequelize, Sequelize.DataTypes, Sequelize.model),
  Availability: Availability(sequelize, Sequelize.DataTypes, Sequelize.model),
  ResourceTag: ResourceTag(sequelize, Sequelize.DataTypes, Sequelize.model),
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
