import {
	ADD_FAVORITES,
	REMOVE_FAVORITES,
	FILTER,
	ORDER,
	RESET,
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
		case FILTER:
			const filterCopy = [...state.allCharacters];
			const filter = filterCopy.filter((char) => char.gender === payload);
			return {
				...state,
				myFavorites: filter,
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
