import { ApolloServer, gql } from 'apollo-server';

const Mutation = gql`
  type Mutation {
    signup(name: String!, password: String!, email: String!): AuthResponse
    login(password: String!, email: String!): AuthResponse
    addResource(name: String!, description: String!, address: String!, lat: Float!, lon: Float!): Resource
  }
`;

export default Mutation;
