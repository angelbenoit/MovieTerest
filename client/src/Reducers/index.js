import { combineReducers } from 'redux';
import authReducer from './authReducer';
import popularReducer from './popularReducer';
import genreListReducer from './genreListReducer';
import searchByGenreReducer from './searchByGenreReducer';
import customSearch from './customSearchReducer';
import modalReducer from './modalReducer';

export default combineReducers({
    auth: authReducer,
    popular: popularReducer,
    genreList: genreListReducer,
    searchByGenre: searchByGenreReducer,
    custom: customSearch,
    modalData: modalReducer
})