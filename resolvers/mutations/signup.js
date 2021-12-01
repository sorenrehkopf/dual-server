import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import models from '../../models/index.js';

export const saltRounds = 10;

const signupResolver = async (_parent, args, context) => {
	const { name, email, password } = args;
	const hashedPassword = await bcrypt.hash(password, saltRounds);

	try {
		return await models.User.create({
			name,
			email,
			password: hashedPassword
		}).then(async () => ({
			token: await jwt.sign({ email }, process.env.JWTSECRET)
		}))
	} catch(e) {
		throw new Error(e);
	}
};

export default signupResolver;
