import { combineReducers } from 'redux';

import auth from './auth/reducer';
import albums from './albums/reducer';

export default combineReducers({
	auth,
	albums,
});
