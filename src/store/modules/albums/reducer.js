import { SET_ALBUMS, SET_SEARCH } from './actions';

export const INITIAL_STATE = {
	result: [],
	search: '',
};

export default function albums(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_ALBUMS:
			return {
				...state,
				result: [...action.payload],
			};
		case SET_SEARCH:
			return {
				...state,
				search: action.payload.search,
			};

		default:
			return state;
	}
}
