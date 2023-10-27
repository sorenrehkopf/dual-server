import { ApolloServer, gql } from 'apollo-server';

const Query = gql`
  type Query {
    currentUser : User
    resources(lat: Float, lon: Float, bounds: GeoBounds, tags: [String], open: [String]) : [Resource]
    tags : [Tag]
  }
`;

export default Query;
