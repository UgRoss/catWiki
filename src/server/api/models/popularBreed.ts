import mongoose from 'mongoose';

export const popularBreed = new mongoose.Schema({
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
