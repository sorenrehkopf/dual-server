import { ApolloServer, gql } from 'apollo-server';

const Query = gql`
  type Query {
    currentUser : User
    resources(lat: Float, lon: Float) : [Resource]
  }
`;

export default Query;
