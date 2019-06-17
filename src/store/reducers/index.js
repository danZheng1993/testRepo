import { combineReducers } from 'redux';

import users from './users';
import photos from './photos';

const rootReducer = combineReducers({
  users,
  photos,
});

export default rootReducer;
