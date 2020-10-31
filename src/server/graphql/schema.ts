import { gql } from 'apollo-server-micro';

export const schema = gql`
    type Query {
        getBreeds(page: Int, limit: Int): [Breed]
        findBreed(name: String!): [Breed]
        getPopularBreeds: [PopularBreed]
    }

    type Mutation {
        createPopularBreed(
            id: String!
            name: String!
            description: String!
            img_url: String!
        ): PopularBreed
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

export default schema;
