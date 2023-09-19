import { gql } from 'apollo-server';

export default gql`
  type Resource {
    name: String
    description: String
    address: String
    lat: Float
    lon: Float
  }
`;
