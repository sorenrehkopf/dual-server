import { gql } from 'apollo-server';

export default gql`
  type AuthResponse {
    token: String
  }
`;
