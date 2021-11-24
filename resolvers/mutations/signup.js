import models from '../../models/index.js';

const signupResolver = async (_parent, args, context) => {
	const { name, email, password } = args;

	try {
		return await models.User.create({
			name,
			email,
			password
		});
	} catch(e) {
		console.error('An error!', e)
		throw new Error(e);
	}
};

export default signupResolver;
