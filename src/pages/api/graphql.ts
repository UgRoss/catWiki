import { ApolloServer, gql } from "apollo-server-micro";
import { CatAPI } from "../../server/datasources/catAPI";
import resolvers from "../../server/resolvers/catWiki";
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const typeDefs = gql`
  type Query {
    sayHello: String
    breeds(page: Int, limit: Int): [Breed]
    breedsSearch(name: String!): [Breed]
  }

  type Breed {
    id: ID!
    name: String!
    origin: String!
    image: String
  }
`;

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  dataSources: () => ({
    catAPI: new CatAPI(),
  }),
  resolvers,
});

export default apolloServer.createHandler({ path: "/api/graphql" });
