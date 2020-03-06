import { combineReducers } from 'redux';

import ailmentsReducer from './components/ailments/ailmentsSlice';

export default combineReducers({
    ailments: ailmentsReducer
});