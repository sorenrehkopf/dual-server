import Sequelize from 'sequelize';
//Models
import User from './user.js';
import Resource from './resource.js'

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
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
