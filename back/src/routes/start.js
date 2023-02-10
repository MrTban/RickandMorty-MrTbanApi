const app = require('./server');
const { database } = require('../db/db');
const { saveApiData } = require('../controllers/saveApiData');

const PORT = 3001;

database
	.sync({ force: true })
	.then(async () => {
		console.log('Database connected');
		await saveApiData();
		console.log('ApiData loaded');
		app.listen(PORT, () => {
			console.log(`Server http://localhost:${PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
