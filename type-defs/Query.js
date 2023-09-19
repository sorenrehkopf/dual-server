import { ApolloServer, gql } from 'apollo-server';

const Query = gql`
  type Query {
    currentUser : User
    resources : [Resource]
  }
`;

export default Query;
