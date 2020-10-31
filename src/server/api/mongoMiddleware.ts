import { NextApiRequest, NextApiResponse } from 'next';
import mongoose, { Connection } from 'mongoose';
import { popularBreed } from './models/popularBreed';

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

    cachedDBConnection.model('PopularBreed', popularBreed);

    return cachedDBConnection;
};

export const mongoMiddleware = (
    handler: (
        req: NextApiRequest,
        res: NextApiResponse,
        connection: Connection
    ) => any
) => async (req: NextApiRequest, res: NextApiResponse) => {
    const connection = await connectToDatabase(process.env.MONGODB_URI);

    try {
        await handler(req, res, connection);
    } catch (e) {
        res.status(500).json({ error: e.message || 'something went wrong' });
    }
};
