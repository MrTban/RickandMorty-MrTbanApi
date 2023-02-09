const { Character } = require('../db/db');

const getAllCharacters = async () => {
	try {
		const allCharacters = await Character.findAll();

		return allCharacters;
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = { getAllCharacters };
