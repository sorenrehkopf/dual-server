import currentUser from './queries/current-user.js';
import signup from './mutations/signup.js';
import login from './mutations/login.js';

export default {
	Query: {
		currentUser
	},
	Mutation: {
		signup,
		login,
	}
};
