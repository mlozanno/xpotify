import { UPDATE_CURRENT_TRACK } from './actions';

export const INITIAL_STATE = {
	prev: null,
	current: null,
	currentTrack: {},
};

export default function tracks(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_CURRENT_TRACK:
			return {
				prev: state.current,
				current: action.payload.track,
				currentTrack: action.payload.currentTrack,
			};

		default:
			return state;
	}
}
