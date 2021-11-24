import { ApolloServer, gql } from 'apollo-server';

export default gql`
  type User {
    authenticated: Boolean
    name: String
    email: String
    pronouns: String
  }
`;
