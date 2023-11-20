import models from '../../models/index.js';

export const saltRounds = 10;

const addResourceResolver = async (_parent, args, context) => {
	const { lat, lon, name, description, address, tags: tagNames } = args

	try {
		const tags = await models.Tag.findAll({
			attributes: ['id'],
			where: {
				name: tagNames,
			}
		})

		const { id: resourceId } = await models.Resource.create({
			lat,
			lon,
			name,
			description,
			address,
		})

		await Promise.all(tags.map(({ id: tagId }) => {
			return models.ResourceTag.create({ resourceId, tagId })
		}))

		return {
			lat,
			lon,
			name,
			description,
			address,
			tags: tagNames.map(name => ({ name })),
		}
	} catch(e) {
		throw new Error(e);
	}
};

export default addResourceResolver;
