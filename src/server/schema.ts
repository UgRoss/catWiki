import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Breed {
    id: ID!
    name: String!
    origin: String!
    image: String
  }
`;