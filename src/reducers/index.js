/**
 * Created by hien.phanthe on 3/15/17.
 */

import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer'

var rootReducer = combineReducers({
    contacts : contactsReducer,
});

export default rootReducer;
