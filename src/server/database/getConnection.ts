import { createConnection, Connection } from 'mongoose';

let cachedDBConnection = null;
export const getMongoConnection = async (uri): Promise<Connection> => {
    if (cachedDBConnection) {
        return cachedDBConnection;
    }

    cachedDBConnection = await createConnection(uri, {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useUnifiedTopology: true,
    });

    return cachedDBConnection;
};
