import { combineReducers } from 'redux';

import auth from './auth/reducer';
import albums from './albums/reducer';
import error from './error/reducer';

export default combineReducers({
	auth,
	albums,
	error,
});
