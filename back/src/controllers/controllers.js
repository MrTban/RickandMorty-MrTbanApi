const { getAllCharacters } = require('../controllers/getAllCharacters');

let fav = [];

const getAll = async (req, res) => {
	try {
		const allCharacters = await getAllCharacters();

		res.status(200).json(allCharacters);
	} catch (error) {
		res.status(404).send('Hubo un problema');
	}
};

const getFav = (req, res) => {
	res.status(200).json(fav);
};

const postFav = (req, res) => {
	fav.push(req.body);
	res.status(200).json(req.body);
	// res.status(200).send('Se guardaron correctamente los datos');
};

const deleteFavId = (req, res) => {
	const { id } = req.params;
	const character = fav.find((ch) => ch.id === Number(id));
	if (character) {
		fav = fav.filter((f) => f.id !== Number(id));
		res.status(200).send(`El personaje con id:${id} fue eliminado de fav`);
	} else {
		res.status(400).send('El personaje no existe');
	}
};

const sendNotFound = async (res) => {
	res.status(404).end('Route not found');
};

module.exports = {
	sendNotFound,
	getFav,
	postFav,
	deleteFavId,
	getAll,
};
