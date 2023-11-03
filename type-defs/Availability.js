import { gql } from 'apollo-server';

export default gql`
  type Availability {
    id: ID
    resource: Resource
    type: String
    startDatetime: String
    endDatetime: String
    weekday: Int
    interval: Int
    startTime: String
    endTime: String
  }
`;
