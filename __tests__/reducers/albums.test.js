import reducer, { INITIAL_STATE } from '~/store/modules/albums/reducer';
import { SET_ALBUMS, SET_SEARCH } from '~/store/modules/albums/actions';

const payload = {
	result: [
		{
			id: '3I9Z1nDCL4E0cP62flcbI5',
			name: 'Appetite For Destruction',
			artists: [{ name: "Guns N' Roses" }],
			images: [
				{
					height: 300,
					url: 'http://images.com/300',
					width: 300,
				},
			],
		},
		{
			id: '3I9Z1nDCL4E0cP62flcbI5',
			name: 'Appetite For Destruction',
			artists: [{ name: "Guns N' Roses" }],
			images: [
				{
					height: 300,
					url: 'http://images.com/300',
					width: 300,
				},
			],
		},
	],
	search: '',
};

describe('Albums reducer', () => {
	it('should return initial state when type is undefined', () => {
		expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
	});

	it('should return initial state if action does not exists', () => {
		expect(reducer(INITIAL_STATE, { type: 'UNKNOWN_TYPE' })).toEqual(
			INITIAL_STATE
		);
	});

	it('should handle albums data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_ALBUMS,
				payload: payload.result,
			})
		).toEqual(payload);
	});

	it('name and value of the action SET_ALBUMS should be equals', () => {
		expect(SET_ALBUMS).toEqual('SET_ALBUMS');
	});

	it('should handle search data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_SEARCH,
				payload: { search: 'teste' },
			})
		).toEqual({ ...INITIAL_STATE, search: 'teste' });
	});

	it('should handle search data if albums result are in state', () => {
		expect(
			reducer(payload, {
				type: SET_SEARCH,
				payload: { search: 'teste' },
			})
		).toEqual({ ...payload, search: 'teste' });
	});
});
