const { ApolloServer, gql } = require('apollo-server');

module.exports = gql`
  type User {
    authenticated: Boolean
    name: String
    pronouns: String
  }
`;
