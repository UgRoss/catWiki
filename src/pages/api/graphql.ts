import { ApolloServer, gql } from 'apollo-server-micro';
import { CatAPI } from '../../server/graphql/datasources/catAPI';
import resolvers from '../../server/graphql/resolvers/catWiki';
import { typeDefs } from '../../server/graphql/schema';
import { connectToDatabase } from '../../server/api/mongoMiddleware';
// https://www.apollographql.com/docs/apollo-server/data/data-sources/

const apolloServer = new ApolloServer({
    typeDefs,
    dataSources: () => ({
        catAPI: new CatAPI(),
    }),
    context: async () => {
        let mongoConnection;
        try {
            mongoConnection = await connectToDatabase(process.env.MONGODB_URI);
        } catch (err) {
            console.log(
                '--->error while connecting via graphql context (db)',
                err
            );
        }
        return { mongoConnection };
    },
    resolvers,
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
