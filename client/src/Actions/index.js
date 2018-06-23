import axios from 'axios';
import { FETCH_USER, FETCH_POPULAR, FETCH_MODAL, FETCH_CUSTOM, FETCH_GENRE_LIST, FETCH_SEARCH_BY_GENRE } from "./types";

const APIKEY = '508d690fdc412430a70ba8b4d841b0e0';

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({type: FETCH_USER, payload: res.data});
};
// searchType is what type of search being done, if it is "discover"(intial), then it returns most popular
// if search Type is "search", a query will be required, which is initially empty.
export const fetchPopular = (searchTypeFormat, page) => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/discover/${searchTypeFormat}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const res = await axios.get(url);
    dispatch({type: FETCH_POPULAR, payload: res.data});
};

export const fetchCustom = (searchTypeFormat, page, query="") => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/search/${searchTypeFormat}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    const res = await axios.get(url);
    dispatch({type: FETCH_CUSTOM, payload: res.data});
};

export const fetchGenreList = (searchTypeFormat) => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/genre/${searchTypeFormat}/list?api_key=${APIKEY}&language=en-US`;
    const res = await axios.get(url);
    dispatch({type: FETCH_GENRE_LIST, payload: res.data});
};

//TODO: Add fetch FETCH_SEARCH_BY_GENRE

export const modalDisplay = (data) => async (dispatch) => { //data to be displayed in the modal
    console.log(data);
    dispatch({ type: FETCH_MODAL, payload: data })
}



