const axios = require('axios');

const getDetailId = async function (req, res) {
	const { detailId } = req.params;

	try {
		const { data } = await axios(
			`https://rickandmortyapi.com/api/character/${detailId}`
		);

		const characterDetail = {
			id: data.id,
			name: data.name,
			image: data.image,
			gender: data.gender,
			species: data.species,
			status: data.status,
			origin: data.origin,
		};
		res.status(200).json(characterDetail);
	} catch (error) {
		res.status(404).send(error.message);
	}
};

module.exports = getDetailId;
