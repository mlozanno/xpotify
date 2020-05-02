import { SET_ERROR, CLEAR_ERROR } from './actions';

export const INITIAL_STATE = '';

export default function error(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_ERROR:
			return action.payload.message;
		case CLEAR_ERROR:
			return '';

		default:
			return state;
	}
}
