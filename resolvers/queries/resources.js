import models from '../../models/index.js';

const { Resource } = models;

const resourcesResolver = async (_parent, args, context) => {
  const resources = await Resource.findAll();

  return resources;
};

export default resourcesResolver;
