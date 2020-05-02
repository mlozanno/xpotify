import { SET_AUTH_DATA } from './actions';

export const INITIAL_STATE = {
	access_token: '',
	expires_in: 0,
	refresh_token: '',
	scope: '',
	token_type: '',
	loading: true,
	signed: false,
};

export default function auth(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_AUTH_DATA:
			return {
				...state,
				...action.payload,
				loading: false,
				signed: true,
			};

		default:
			return state;
	}
}
