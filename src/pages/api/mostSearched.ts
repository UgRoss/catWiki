import url from 'url';
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';

let cachedDBConnection = null;

async function connectToDatabase(uri, dbName) {
    if (cachedDBConnection) {
        return cachedDBConnection;
    }

    const client = await MongoClient.connect(uri, { useNewUrlParser: true });
    cachedDBConnection = await client.db(dbName);

    return cachedDBConnection;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await connectToDatabase(
        process.env.MONGODB_URI,
        process.env.MONGODB_NAME
    );

    if (req.method === 'POST') {
    } else if (req.method === 'GET') {
        res.status(200).json({ data: 'hello' });
    } else {
        res.status(501).json({ error: 'Method not supported' });
    }
};
