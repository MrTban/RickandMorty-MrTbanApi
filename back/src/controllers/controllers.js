const axios = require('axios');

let fav = [];

const getFav = (req, res) => {
	res.status(200).end(JSON.stringify(fav));
};

const postFav = (req, res) => {
	fav.push(req.body);
	console.log('post fav -> ', fav);
	res.status(200).end(JSON.stringify(req.body));
};

const deleteFavId = (req, res) => {
	const { id } = req.params;
	const character = fav.find((ch) => ch.id === Number(id));
	if (character) {
		fav = fav.filter((f) => f.id !== Number(id));
		console.log('delete fav -> ', fav);
		res.status(200).end(JSON.stringify(character));
	} else {
		res.status(400).end(`El personaje con id:${id} no se encuentra en fav`);
	}
};

const getCharacterId = (req, res) => {
	const { id } = req.params;
	axios(`https://rickandmortyapi.com/api/character/${id}`)
		.then((result) => result.data)
		.then((data) => {
			const character = {
				id: data.id,
				name: data.name,
				image: data.image,
				gender: data.gender,
				species: data.species,
			};
			res
				.writeHead(200, { 'Content-Type': 'application/json' })
				.end(JSON.stringify(character));
		})
		.catch((error) => {
			res
				.writeHead(500, { 'Content-Type': 'text/plain' })
				.end(`El personaje con id:${id} no fue encontrado`);
		});
};

const getDetailId = (req, res) => {
	const { detailId } = req.params;
	axios(`https://rickandmortyapi.com/api/character/${detailId}`)
		.then((result) => result.data)
		.then((data) => {
			const character = {
				id: data.id,
				name: data.name,
				image: data.image,
				gender: data.gender,
				species: data.species,
				status: data.status,
				origin: data.origin,
			};
			res
				.writeHead(200, { 'Content-Type': 'application/json' })
				.end(JSON.stringify(character));
		})
		.catch((error) => {
			res
				.writeHead(500, { 'Content-Type': 'text/plain' })
				.end(`El detalle del personaje con id:${id} no fue encontrado`);
		});
};

const sendNotFound = (res) => {
	res.writeHead(404, { 'Content-Type': 'text/plain' });
	res.end('Route not found');
};

module.exports = {
	sendNotFound,
	getCharacterId,
	getDetailId,
	getFav,
	postFav,
	deleteFavId,
};
