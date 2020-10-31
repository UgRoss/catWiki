import { mongoMiddleware } from '../../server/api/mongoMiddleware';

export default mongoMiddleware(async (req, res, connection) => {
    const { PopularBreed } = connection.models;

    if (req.method === 'POST') {
        try {
            const breed = await PopularBreed.findById(req.body.id).exec();

            if (breed) {
                breed.search_count = breed.search_count + 1;
                await PopularBreed.updateOne({ _id: breed._id }, breed);

                res.status(200).json(breed);
            } else {
                const breed = await PopularBreed.create({
                    _id: req.body.id,
                    name: req.body.name,
                    img_url: req.body.img_url,
                    description: req.body.description,
                    search_count: 1,
                });
                res.status(200).json(breed);
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ error });
        }
    } else if (req.method === 'GET') {
        try {
            const breed = await PopularBreed.find({ _id: req.query.id });
            res.status(200).json(breed);
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(501).json({ error: 'Method not supported' });
    }
});
