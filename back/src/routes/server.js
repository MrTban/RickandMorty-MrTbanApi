const http = require('http');
const { sendNotFound } = require('../controllers/controllers');
const characters = require('../utils/data');

const PORT = 3001;

http
	.createServer((req, res) => {
		const takeUrl = req.url.split('/');
		const takeId = Number(takeUrl.pop());
		const url = takeUrl.join('/');

		if (url === '/rickandmorty/character') {
			const character = characters.find((char) => {
				return char.id === takeId;
			});
			if (character) {
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(JSON.stringify(character));
			} else {
				sendNotFound(res);
			}
		} else if (req.url === '/rickandmorty/characters') {
			res.writeHead(200, { 'Content-Type': 'application/json' });
			res.end(JSON.stringify(characters));
		} else {
			sendNotFound(res);
		}
	})
	.listen(PORT, () => {
		console.log(`http://localhost:${PORT}`);
	});

//

// http
// 	.createServer((req, res) => {
// 		switch (req.url) {
// 			case '/rickandmorty/characters':
// 				res.writeHead(200, { 'Content-Type': 'application/json' });
// 				res.end(JSON.stringify(characters));
// 				break;
// 			default:
// 				sendNotFound(res);
// 				break;
// 		}
// 	})
// 	.listen(PORT, () => {
// 		console.log(`http://localhost:${PORT}`);
// 	});
