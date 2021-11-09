import Sequelize from 'sequelize';
//Models
import User from './user.js';

const models = {
  User,
};

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };

export default models;
