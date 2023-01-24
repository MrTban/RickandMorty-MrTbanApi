import {
	ADD_FAVORITES,
	REMOVE_FAVORITES,
	FILTER,
	ORDER,
	RESET,
} from './action_type';

export const addFavorites = (char) => {
	return {
		type: ADD_FAVORITES,
		payload: char,
	};
};

export const removeFavorites = (id) => {
	return {
		type: REMOVE_FAVORITES,
		payload: id,
	};
};

export const filterCards = (status) => {
	return {
		type: FILTER,
		payload: status,
	};
};

export const orderCards = (id) => {
	return {
		type: ORDER,
		payload: id,
	};
};

export const reset = () => {
	return {
		type: RESET,
	};
};
