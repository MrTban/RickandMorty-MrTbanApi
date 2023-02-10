// const getAllCharacters = require('../controllers/getAllCharacters');
// const getAllFavorites = require('./getAllFavorites');
// const deleteFavoriteById = require('./deleteFavoriteById');

// const getAll = async (req, res) => {
// 	try {
// 		const allCharacters = await getAllCharacters();

// 		res.status(200).json(allCharacters);
// 	} catch (error) {
// 		res.status(404).send('Hubo un problema');
// 	}
// };

// const getFav = async (req, res) => {
// 	try {
// 		const allFavorites = await getAllFavorites();

// 		if (allFavorites.error) throw new Error(allFavorites.error);

// 		res.status(200).json(allFavorites);
// 	} catch (error) {
// 		res.status(404).send(error.message);
// 	}
// };

// const postFav = async (req, res) => {
// 	try {
// 		const characterFav = await postFavChar(req.body);

// 		if (characterFav.error) throw new Error(characterFav.error);

// 		return res.status(200).json(characterFav);
// 	} catch (error) {
// 		res.status(404).send(error.message);
// 	}
// };

// const deleteFavId = async (req, res) => {
// 	try {
// 		const { id } = req.params;
// 		const deleteFavorite = await deleteFavoriteById(id);

// 		if (deleteFavorite.error) throw new Error(deleteFavorite.error);

// 		return res.status(200).json(deleteFavorite);
// 	} catch (error) {
// 		return res.status(404).send(error.message);
// 	}
// };

// const sendNotFound = async (res) => {
// 	res.status(404).end('Route not found');
// };

// module.exports = {
// 	sendNotFound,
// 	getFav,
// 	postFav,
// 	deleteFavId,
// 	getAll,
// };
