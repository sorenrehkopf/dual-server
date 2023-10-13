import { gql } from 'apollo-server';

export default gql`
  input GeoBounds {
    n: Float
    s: Float
    e: Float
    w: Float
  }
`;
