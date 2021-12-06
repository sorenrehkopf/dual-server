import currentUser from './queries/current-user.js';
import signup from './mutations/signup.js';

export default {
	Query: {
		currentUser
	},
	Mutation: {
		signup
	}
};
