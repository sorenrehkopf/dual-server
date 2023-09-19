import currentUser from './queries/current-user.js';
import resources from './queries/resources.js';
import signup from './mutations/signup.js';
import login from './mutations/login.js';

export default {
	Query: {
		currentUser,
		resources,
	},
	Mutation: {
		signup,
		login,
	}
};
