import jwt from 'jsonwebtoken';

const dummyUser = {
	authenticated: false
};


const addCurrentUserToContext = async ({ req, res }) => {
	const { headers: { authtoken } } = req;
	let currentUser;

	try {
		const authTokenUser = await jwt.verify(authtoken, process.env.JWTSECRET);

		currentUser = {
			...authTokenUser,
			authenticated: true
		};
	} catch (_e) {
		currentUser = dummyUser;
	}

	return { currentUser };
};

export default addCurrentUserToContext;
