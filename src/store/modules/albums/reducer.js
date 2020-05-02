import { SET_ALBUMS } from './actions';

export const INITIAL_STATE = [];

export default function albums(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_ALBUMS:
			return action.payload;

		default:
			return state;
	}
}
