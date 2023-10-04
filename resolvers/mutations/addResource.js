import models from '../../models/index.js';

export const saltRounds = 10;

const addResourceResolver = async (_parent, args, context) => {
	const { lat, lon, name, description, address } = args
	console.log('got em!', args)
	try {
		return await models.Resource.create({
			lat,
			lon,
			name,
			description,
			address
		}).then(async () => ({
			lat,
			lon,
			name,
			description,
			address
		}))
	} catch(e) {
		throw new Error(e);
	}
};

export default addResourceResolver;
