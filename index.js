const { ApolloServer } = require('apollo-server');
const typeDefs = require('./type-defs/index.js');
const resolvers = require('./resolvers/index.js');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen('3030').then(({ url }) => {
  console.log(`Listening at ${url}!`);
});
