import reducer, { INITIAL_STATE } from '~/store/modules/error/reducer';
import { SET_ERROR, CLEAR_ERROR } from '~/store/modules/error/actions';

describe('Error reducers', () => {
	it('Should return initial state when type is undefined', () => {
		expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
	});

	it('Should return initial state if action does not exists', () => {
		expect(reducer(INITIAL_STATE, { type: 'UNKNOWN_TYPE' })).toEqual(
			INITIAL_STATE
		);
	});

	it('Should handle error data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_ERROR,
				payload: { message: 'Error message!' },
			})
		).toEqual('Error message!');
	});

	it('Should be clear error', () => {
		expect(
			reducer('Error message!', {
				type: CLEAR_ERROR,
			})
		).toEqual('');
	});

	it('Should action SET_ERROR name and value to be equals', () => {
		expect(SET_ERROR).toEqual('SET_ERROR');
	});

	it('Should action CLEAR_ERROR name and value to be equals', () => {
		expect(CLEAR_ERROR).toEqual('CLEAR_ERROR');
	});
});
