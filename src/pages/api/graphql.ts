import { ApolloServer } from 'apollo-server-micro';
import dataSources from '@server/graphql/datasources';
import typeDefs from '@server/graphql/schema';
import resolvers from '@server/graphql/resolvers';
import { getMongoConnection } from '@server/database/getConnection';
// https://www.apollographql.com/docs/apollo-server/data/data-sources/
// https://akhilaariyachandra.com/create-a-serverless-api-with-typescript-graphql-and-mongodb

const apolloServer = new ApolloServer({
    typeDefs,
    dataSources: () => dataSources,
    context: async () => {
        const mongoConnection = await getMongoConnection(
            process.env.MONGODB_URI
        );

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
