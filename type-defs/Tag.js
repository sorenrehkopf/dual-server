import { gql } from 'apollo-server';

export default gql`
  type Tag {
    id: ID
    name: String
  }
`;
