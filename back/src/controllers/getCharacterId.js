const axios = require('axios');

const getCharacterId = async (req, res) => {
	const { id } = req.params;

	try {
		const result = await axios(`https://rickandmortyapi.com/api/character/${id}`);
		const characterApi = result.data;

		const characterId = {
			id: characterApi.id,
			name: characterApi.name,
			image: characterApi.image,
			gender: characterApi.gender,
			species: characterApi.species,
		};

		res.status(200).json(characterId);
	} catch (error) {
		res.status(404).send(error.message);
	}
};
module.exports = getCharacterId;
