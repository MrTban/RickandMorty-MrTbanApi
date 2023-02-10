const express = require('express');
const router = express.Router();
const getCharacterId = require('../controllers/getCharacterId');
const getDetailId = require('../controllers/getDetailId');
const postFav = require('../controllers/postFav');
const getAllCharacters = require('../controllers/getAllCharacters');
const getAllFavorites = require('../controllers/getAllFavorites');
const deleteFavoriteById = require('../controllers/deleteFavoriteById');

router.get('/allCharacters', async (req, res) => {
	try {
		const allCharacters = await getAllCharacters();

		res.status(200).json(allCharacters);
	} catch (error) {
		res.status(404).send('Hubo un problema');
	}
});

router.get('/character/:id', getCharacterId);

router.get('/detail/:detailId', getDetailId);

router.get('/fav', async (req, res) => {
	try {
		const allFavorites = await getAllFavorites();

		if (allFavorites.error) throw new Error(allFavorites.error);

		res.status(200).json(allFavorites);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

router.post('/fav', async (req, res) => {
	try {
		const characterFav = await postFav(req.body);

		if (characterFav.error) throw new Error(characterFav.error);

		return res.status(200).json(characterFav);
	} catch (error) {
		res.status(404).send(error.message);
	}
});

router.delete('/fav/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deleteFavorite = await deleteFavoriteById(id);

		if (deleteFavorite.error) throw new Error(deleteFavorite.error);

		return res.status(200).json(deleteFavorite);
	} catch (error) {
		return res.status(404).send(error.message);
	}
});

module.exports = router;
