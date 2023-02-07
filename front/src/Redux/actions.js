import {
	ADD_FAVORITES,
	REMOVE_FAVORITES,
	FILTERGENDER,
	ORDER,
	RESET,
	FILTERSPECIES,
} from './action_type';
import axios from 'axios';

export const addFavorites = (char) => {
	return async function (dispatch) {
		const response = await axios.post(`http://localhost:3001/rickandmorty/fav`, char);
		const data = response.data;

		return dispatch({
			type: ADD_FAVORITES,
			payload: data,
		});
	};
};

export const removeFavorites = (id) => {
	return async function (dispatch) {
		await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);

		return dispatch({
			type: REMOVE_FAVORITES,
			payload: id,
		});
	};
};

export const filterGender = (status) => {
	return {
		type: FILTERGENDER,
		payload: status,
	};
};

export const filterSpecies = (status) => {
	return {
		type: FILTERSPECIES,
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
