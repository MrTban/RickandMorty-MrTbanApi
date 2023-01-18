import { ADD_FAVORITES, REMOVE_FAVORITES } from './action_type';

export const addFavorites = (id) => {
	return {
		type: ADD_FAVORITES,
		payload: id,
	};
};

export const removeFavorites = (id) => {
	return {
		type: REMOVE_FAVORITES,
		payload: id,
	};
};
