export default {
  Query: {
    breeds: (_, { page, limit }, { dataSources }) => dataSources.catAPI.getBreeds({ page, limit }),
  },
  Breed: {
    image: ({ id }, _, { dataSources }) => dataSources.catAPI.getImage({ breed_id: id }),
  },
};
