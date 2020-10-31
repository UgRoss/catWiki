import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
    type Query {
        sayHello: String
        breeds(page: Int, limit: Int): [Breed]
        breedsSearch(name: String!): [Breed]
        popularBreeds: [PopularBreed]
    }

    type PopularBreed {
        _id: String!
        name: String!
        img_url: String!
        description: String!
        search_count: Int
    }

    type Breed {
        id: ID!
        name: String!
        origin: String!
        image: String
    }
`;
