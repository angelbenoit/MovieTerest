import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popularReducer from './popularReducer'

export default combineReducers({
    auth: authReducer,
    popular: popularReducer
})