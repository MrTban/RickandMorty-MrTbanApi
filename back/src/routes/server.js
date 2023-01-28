// const http = require('http');
// const {
// 	sendNotFound,
// 	getCharById,
// 	getCharDetail,
// } = require('../controllers/controllers');

// const PORT = 3001;

// //

// http
// 	.createServer((req, res) => {
// 		res.setHeader('Access-Control-Allow-Origin', '*');

// 		let id = req.url.split('/').at(-1);

// 		if (req.url.includes('onsearch')) {
// 			getCharById(res, id);
// 		}
// 		if (req.url.includes('detail')) {
// 			getCharDetail(res, id);
// 		}
// 	})
// 	.listen(PORT, 'localhost');
