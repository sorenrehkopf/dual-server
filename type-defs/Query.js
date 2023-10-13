import { ApolloServer, gql } from 'apollo-server';

const Query = gql`
  type Query {
    currentUser : User
    resources(lat: Float, lon: Float, bounds: GeoBounds) : [Resource]
  }
`;

export default Query;
