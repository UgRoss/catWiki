export default {
  Query: {
    breeds: (_, { page, limit }, { dataSources }) =>
      dataSources.catAPI.getBreeds({ page, limit }),
    breedsSearch: (_, { name }, { dataSources }) =>
      dataSources.catAPI.breedsSearch({ name }),
  },
  Breed: {
    image: ({ id }, _, { dataSources }) =>
      dataSources.catAPI.getImage({ breed_id: id }),
  },
};
