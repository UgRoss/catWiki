import url from 'url';
import { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

const popularBreed = new mongoose.Schema({
    _id: {
        required: true,
        type: String,
    },
    name: {
        required: true,
        type: String,
    },
    thumbnail: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
});

let cachedDBConnection = null;

async function connectToDatabase(uri, dbName) {
    if (cachedDBConnection) {
        return cachedDBConnection;
    }

    cachedDBConnection = await mongoose.createConnection(uri, {
        useNewUrlParser: true,
        bufferCommands: false,
        bufferMaxEntries: 0,
        useUnifiedTopology: true,
    });

    return cachedDBConnection;
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const connection = await connectToDatabase(
        process.env.MONGODB_URI,
        process.env.MONGODB_NAME
    );

    const PopularBreed = connection.model('PopularBreed', popularBreed);

    if (req.method === 'POST') {
        PopularBreed.create(
            {
                _id: req.body.id,
                name: req.body.name,
                thumbnail: req.body.thumbnail,
                description: req.body.description,
            },
            (error, breed) => {
                if (error) {
                    connection.close();
                    res.status(500).json({ error });
                } else {
                    res.status(200).json(breed);
                    connection.close();
                }
            }
        );
    } else if (req.method === 'GET') {
        PopularBreed.find({ _id: req.query.id }, (error, breed) => {
            if (error) {
                connection.close();
                res.status(500).json({ error });
            } else {
                res.status(200).json(breed);
                connection.close();
            }
        });
    } else {
        res.status(501).json({ error: 'Method not supported' });
    }
};
