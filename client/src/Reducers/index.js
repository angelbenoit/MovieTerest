import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popularReducer from './popularReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    auth: authReducer,
    popular: popularReducer,
    modalData: modalReducer
})