const express = require('express');
const router = express.Router();
const postFav = require('../controllers/postFav');
const getAllCharacters = require('../controllers/getAllCharacters');
const getAllFavorites = require('../controllers/getAllFavorites');
const deleteFavoriteById = require('../controllers/deleteFavoriteById');

router.get('/allCharacters', async (req, res) => {
	try {
		const allCharacters = await getAllCharacters();

		res.status(200).json(allCharacters);
	} catch (error) {
		res.status(404).send('Hubo un problemilla');
	}
});

router.get('/character/:id', async (req, res) => {
	try {
		const { id } = req.params;

		const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
		const data = response.data;

		const infoCharacter = {
			id: data.id,
			name: data.name,
			species: data.species,
			gender: data.gender,
			image: data.image,
		};

		res.status(200).json(infoCharacter);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

router.get('/detail/:detailId', async (req, res) => {
	try {
		const { detailId } = req.params;

		const { data } = await axios(`https://rickandmortyapi.com/api/character/${detailId}`);

		const infoCharacterDetail = {
			name: data.name,
			status: data.status,
			species: data.species,
			gender: data.gender,
			origin: data.origin,
			image: data.image,
		};

		res.status(200).json(infoCharacterDetail);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

router.post('/fav', async (req, res) => {
	try {
		const allFavorites = await getAllFavorites();

		if (allFavorites.error) throw new Error(allFavorites.error);

		return res.status(200).json(allFavorites);
	} catch (error) {
		return res.status(404).send(error.message);
	}
});

router.post('/fav', async (req, res) => {
	try {
		const characterFav = await postFav(req.body);

		if (characterFav.error) throw new Error(characterFav.error);

		res.status(200).json(characterFav);
	} catch (error) {
		return res.status(404).send(error.message);
	}
});

router.delete('/fav/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteFavorite = await deleteFavoriteById(parseInt(id));

		if (deleteFavorite.error) throw new Error(deleteFavorite.error);

		return res.status(200).send(deleteFavorite);
	} catch (error) {
		return res.status(404).send(error.message);
	}
});

module.exports = router;
