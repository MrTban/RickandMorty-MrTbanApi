import {
	ADD_FAVORITES,
	REMOVE_FAVORITES,
	FILTER,
	ORDER,
	RESET,
} from './action_type';
import axios from 'axios';

export const addFavorites = (char) => {
	return function (dispatch) {
		axios
			.post(`http://localhost:3001/rickandmorty/fav`, char)
			.then((response) => response.data)
			.then((data) => {
				dispatch({
					type: ADD_FAVORITES,
					payload: data,
				});
			});
	};
};

export const removeFavorites = (id) => {
	return function (dispatch) {
		axios
			.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
			.then((response) => response.data)
			.then((data) => {
				dispatch({
					type: REMOVE_FAVORITES,
					payload: id,
				});
			});
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
