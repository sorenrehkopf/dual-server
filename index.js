import 'dotenv/config';
import models, { sequelize } from './models/index.js';
import { ApolloServer } from 'apollo-server';
import typeDefs from './type-defs/index.js';
import resolvers from './resolvers/index.js';

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

sequelize.sync().then(() => {
	console.log('Database initialized.');

	server.listen('3030').then(({ url }) => {
  	console.log(`Listening at ${url}`);
	});
});
