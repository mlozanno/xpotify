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
	it('Should return initial state when type is undefined', () => {
		expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
	});

	it('Should return initial state if action does not exists', () => {
		expect(reducer(INITIAL_STATE, { type: 'UNKNOWN_TYPE' })).toEqual(
			INITIAL_STATE
		);
	});

	it('Should handle albums data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_ALBUMS,
				payload: payload.result,
			})
		).toEqual(payload);
	});

	it('Should action SET_ALBUMS name and value to be equals', () => {
		expect(SET_ALBUMS).toEqual('SET_ALBUMS');
	});

	it('Should handle search data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_SEARCH,
				payload: { search: 'teste' },
			})
		).toEqual({ ...INITIAL_STATE, search: 'teste' });
	});

	it('Should handle search data if albums result are in state', () => {
		expect(
			reducer(payload, {
				type: SET_SEARCH,
				payload: { search: 'teste' },
			})
		).toEqual({ ...payload, search: 'teste' });
	});
});
