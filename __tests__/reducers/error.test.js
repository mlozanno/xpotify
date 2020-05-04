import reducer, { INITIAL_STATE } from '~/store/modules/error/reducer';
import { SET_ERROR, CLEAR_ERROR } from '~/store/modules/error/actions';

describe('Error reducers', () => {
	it('should return initial state when type is undefined', () => {
		expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
	});

	it('should return initial state if action does not exists', () => {
		expect(reducer(INITIAL_STATE, { type: 'UNKNOWN_TYPE' })).toEqual(
			INITIAL_STATE
		);
	});

	it('should handle error data', () => {
		expect(
			reducer(INITIAL_STATE, {
				type: SET_ERROR,
				payload: { message: 'Error message!' },
			})
		).toEqual('Error message!');
	});

	it('should clear error', () => {
		expect(
			reducer('Error message!', {
				type: CLEAR_ERROR,
			})
		).toEqual('');
	});

	it('name and value of the action SET_ERROR should be equals', () => {
		expect(SET_ERROR).toEqual('SET_ERROR');
	});

	it('name and value of the action CLEAR_ERROR should be equals', () => {
		expect(CLEAR_ERROR).toEqual('CLEAR_ERROR');
	});
});
