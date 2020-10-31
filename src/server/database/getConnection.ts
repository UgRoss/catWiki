import { Connection } from 'mongoose';

let cachedDBConnection = null;
export const connectToDatabase = async (uri): Promise<Connection> => {
    if (cachedDBConnection) {
        return cachedDBConnection;
    }

    cachedDBConnection = await mongoose.createConnection(uri, {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useUnifiedTopology: true,
    });

    cachedDBConnection.model(popularBreedCollectionName, popularBreedSchema);

    return cachedDBConnection;
};
