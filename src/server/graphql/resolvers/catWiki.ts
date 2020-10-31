export default {
    Query: {
        breeds: (_, { page, limit }, { dataSources }) =>
            dataSources.catAPI.getBreeds({ page, limit }),
        breedsSearch: (_, { name }, { dataSources }) =>
            dataSources.catAPI.breedsSearch({ name }),
        popularBreeds: async (_, {}, { mongoConnection }) => {
            const { models } = mongoConnection;
          return await models.PopularBreed.find()
                .sort({search_count: 'asc'})
                .limit(10)
                .exec();
        },
    },
    Breed: {
        image: ({ id }, _, { dataSources }) =>
            dataSources.catAPI.getImage({ breed_id: id }),
    },
};
