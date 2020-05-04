import reducer, { INITIAL_STATE } from '~/store/modules/auth/reducer';
import { SET_AUTH_DATA } from '~/store/modules/auth/actions';

const newState = {
	access_token: 'd41d8cd98f00b204e9800998ecf8427e',
	expires_in: 3600,
	refresh_token: 'd41d8cd98f00b204e9800998ecf8427e',
	scope: 'user scop',
	token_type: 'Bearer',
	loading: false,
	signed: true,
};

describe('Auth reducers', () => {
	it('should return initial state when type is undefined', () => {
		expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
	});

	it('should return initial state if action does not exists', () => {
		expect(reducer(INITIAL_STATE, { type: 'UNKNOWN_TYPE' })).toEqual(
			INITIAL_STATE
		);
	});

	it('should handle auth data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_AUTH_DATA,
				payload: { ...newState },
			})
		).toEqual(newState);
	});

	it('name and value of the action SET_AUTH_DATA should be equals', () => {
		expect(SET_AUTH_DATA).toEqual('SET_AUTH_DATA');
	});
});
