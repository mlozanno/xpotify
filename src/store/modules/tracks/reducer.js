import { UPDATE_CURRENT_TRACK } from './actions';

export const INITIAL_STATE = {
	prev: null,
	next: null,
};

export default function tracks(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_CURRENT_TRACK:
			return {
				prev: state.next,
				next: action.payload.track,
			};

		default:
			return state;
	}
}
