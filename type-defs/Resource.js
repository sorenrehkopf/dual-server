import { gql } from 'apollo-server';

export default gql`
  type Resource {
    id: ID
    name: String
    description: String
    address: String
    lat: Float
    lon: Float
    distance: Float
    tags: [Tag]
    schedule: [Availability]
  }
`;
