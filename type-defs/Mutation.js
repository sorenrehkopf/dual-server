import { ApolloServer, gql } from 'apollo-server';

const Mutation = gql`
  type Mutation {
    signup(name: String!, password: String!, email: String!): User
  }
`;

export default Mutation;
