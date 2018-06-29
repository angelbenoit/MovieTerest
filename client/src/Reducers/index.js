import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popularReducer from './popularReducer';
import genreListReducer from './genreListReducer';
import searchByGenreReducer from './searchByGenreReducer';
import { reducer as formReducer } from 'redux-form';
import modalReducer from './modalReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    popular: popularReducer,
    genreList: genreListReducer,
    searchByGenre: searchByGenreReducer,
    modalData: modalReducer
})