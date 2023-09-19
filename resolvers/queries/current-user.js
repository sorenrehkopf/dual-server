const currentUserResolver = async (_parent, args, context) => {
	const { currentUser } = context;

	return currentUser;
};

export default currentUserResolver;
