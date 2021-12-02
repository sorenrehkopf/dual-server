const dummyUser = {
	authenticated: false,
	name: 'Friend',
	email: null
};

const currentUserResolver = async (_parent, args, context) => {
	const { currentUser } = context;

	return currentUser || dummyUser;
};

export default currentUserResolver;
