import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../../models/index.js';

export const saltRounds = 10;

const signupResolver = async (_parent, args, context) => {
	const { email, password } = args;

	try {
		return await models.User.findOne({
			where: { email }
		}).then(async user => {
			console.log('the userrrrrr', user.password, user.email, email)
			const isPassValid = await bcrypt.compare(password, user.password)

			if (isPassValid) {
				const { name } = user;
				const token = await jwt.sign({ name, email }, process.env.JWTSECRET)

				return { token }
			}

			throw 'Invalid pass';
		})
	} catch(e) {
		throw new Error(e);
	}
};

export default signupResolver;
