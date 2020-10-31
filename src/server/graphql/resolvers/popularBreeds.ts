import { getPopularBreedModel } from '@server/database/models/popularBreed';

export default {
  Query: {
    getPopularBreeds: async (_, {}, { mongoConnection }) => {
      const PopularBreed = getPopularBreedModel(mongoConnection);

      return await PopularBreed.find().sort({ search_count: 'asc' }).limit(10).exec();
    },
  },
  Mutation: {
    createPopularBreed: async (_, { id, name, img_url, description }, { mongoConnection }) => {
      const PopularBreed = getPopularBreedModel(mongoConnection);
      const breed = await PopularBreed.findById(id).exec();

      if (breed) {
        breed.search_count = breed.search_count + 1;
        await PopularBreed.updateOne({ _id: breed._id }, breed);

        return breed;
      } else {
        return await PopularBreed.create({
          _id: id,
          name: name,
          img_url: img_url,
          description: description,
          search_count: 1,
        });
      }
    },
  },
};
