import { ApolloServer, gql } from 'apollo-server';

const Mutation = gql`
  type Mutation {
    signup(name: String!, password: String!, email: String!): AuthResponse
  }
`;

export default Mutation;
