import currentUser from './queries/current-user.js';
import resources from './queries/resources.js';
import tags from './queries/tags.js';
import signup from './mutations/signup.js';
import login from './mutations/login.js';
import addResource from './mutations/addResource.js';

export default {
	Query: {
		currentUser,
		resources,
		tags,
	},
	Mutation: {
		signup,
		login,
		addResource,
	}
};
