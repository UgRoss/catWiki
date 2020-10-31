import { Schema, Model, Connection, Document } from 'mongoose';

export interface IPopularBreed extends Document {
  _id: string;
  name: string;
  img_url: string;
  description: string;
  search_count: number;
}

export const popularBreedSchema = new Schema({
  _id: {
    required: true,
    type: String,
  },
  name: {
    required: true,
    type: String,
  },
  img_url: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  search_count: {
    type: Number,
    required: true,
  },
});

export const collectionName = 'popularBreeds';

export const getPopularBreedModel = (connection: Connection): Model<IPopularBreed> =>
  connection.model(collectionName, popularBreedSchema);
