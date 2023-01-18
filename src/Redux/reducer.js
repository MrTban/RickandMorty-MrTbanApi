import { ADD_FAVORITES, REMOVE_FAVORITES } from './action_type';

const initialState = {
	myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_FAVORITES:
			return {
				...state,
				myFavorites: [...state.myFavorites, payload],
			};
		case REMOVE_FAVORITES:
			const filtered = state.myFavorites.filter((id) => {
				return id !== payload;
			});
			return {
				...state,
				myFavorites: filtered,
			};
		default:
			return { ...state };
	}
};

export default rootReducer;
