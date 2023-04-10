const app = require('./server');
const { database } = require('../db/db');
const { saveApiData } = require('..//controllers/saveApiData');

database
	.sync({ force: true })
	.then(async () => {
		console.log('DB conectada, master');
		await saveApiData();
		app.listen(3001, () => {
			console.log('Server on port 3001');
		});
	})
	.catch((error) => {
		console.log(error);
	});
