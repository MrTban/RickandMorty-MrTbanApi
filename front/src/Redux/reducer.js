import {
	ADD_FAVORITES,
	REMOVE_FAVORITES,
	FILTERGENDER,
	ORDER,
	RESET,
	FILTERSPECIES,
} from './action_type';

const initialState = {
	myFavorites: [],
	allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAVORITES:
			return {
				...state,
				myFavorites: [...state.allCharacters, payload],
				allCharacters: [...state.allCharacters, payload],
			};
		case REMOVE_FAVORITES:
			const filtered = state.myFavorites.filter((char) => char.id !== payload);
			return {
				...state,
				myFavorites: filtered,
				allCharacters: filtered,
			};
		case FILTERGENDER:
			const filterCopyGender = [...state.allCharacters];
			const filterGender = filterCopyGender.filter((char) => char.gender === payload);
			return {
				...state,
				myFavorites: filterGender,
			};
		case FILTERSPECIES:
			const filterCopySpecies = [...state.allCharacters];
			const filterSpecies = filterCopySpecies.filter((char) => char.species === payload);
			return {
				...state,
				myFavorites: filterSpecies,
			};
		case ORDER:
			const orderCopy = [...state.allCharacters];
			const order = orderCopy.sort((a, b) => {
				if (a.id > b.id) {
					return 'Ascendente' === payload ? 1 : -1;
				}
				if (a.id < b.id) {
					return 'Descendente' === payload ? 1 : -1;
				}
				return 0;
			});
			return {
				...state,
				myFavorites: order,
			};
		case RESET:
			return {
				...state,
				myFavorites: [...state.allCharacters],
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
