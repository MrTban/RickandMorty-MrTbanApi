const { Favorite } = require('../db/db');

const deleteFavoriteById = async (id) => {
	try {
		const favoriteFinded = await Favorite.findByPk(id);
		if (!favoriteFinded) throw new Error('No existe ese favorito');

		favoriteFinded.destroy();

		return 'Eliminado correctamente';
	} catch (error) {
		return { error: error.message };
	}
};

module.exports = deleteFavoriteById;
