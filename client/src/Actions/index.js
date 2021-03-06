import axios from 'axios';
import { FETCH_USER, AUTH_USER, FETCH_POPULAR,
         RESET_POPULAR, FETCH_MODAL,
         FETCH_GENRE_LIST, FETCH_SEARCH_BY_GENRE,
         FETCH_BY_ID, RESET_GENRE_LIST, FETCH_ERROR } from "./types";

const APIKEY = '508d690fdc412430a70ba8b4d841b0e0';

export const fetchUser = () => async (dispatch) => {
    if(localStorage.getItem("token")){
        const res = await axios.get("/api/current_user", {headers: {authorization: localStorage.getItem("token")}});
        dispatch({type: FETCH_USER, payload: res.data});
    }
};
// searchType is what type of search being done, if it is "discover"(intial), then it returns most popular
// if search Type is "search", a query will be required, which is initially empty.
export const fetchPopular = (searchTypeFormat, page) => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/discover/${searchTypeFormat}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    //console.log(url);
    const res = await axios.get(url);
    //console.log(res.data.results)
    dispatch({type: FETCH_POPULAR, payload: res.data.results});
};

export const resetPopular = () => async (dispatch) => {
    dispatch({type: RESET_POPULAR, payload: []});
};

export const fetchGenreList = (searchTypeFormat) => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/genre/${searchTypeFormat}/list?api_key=${APIKEY}&language=en-US`;
    //console.log(url)
    const res = await axios.get(url);
    dispatch({type: FETCH_GENRE_LIST, payload: res.data.genres});
};

export const resetGenreList = () => async (dispatch) => {
    console.log("Reseting genre list");
    dispatch({type: RESET_GENRE_LIST, payload: []});
};

export const fetchByGenre = (searchTypeFormat, page, genre) => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/discover/${searchTypeFormat}?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genre}`;
    const res = await axios.get(url);
    console.log(url);
    dispatch({type: FETCH_SEARCH_BY_GENRE, payload: res.data.results});
};

export const modalDisplay = (data) => async (dispatch) => { //data to be displayed in the modal
    //console.log(data);
    dispatch({ type: FETCH_MODAL, payload: data })
}

//In the url, format and id will be entered
//for example: '/format/id'
export const fetchByID = (id, format) => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/${format}/${id}?api_key=${APIKEY}&language=en-US`;
    const res = await axios.get(url);
    //console.log(res.data);
    dispatch({ type: FETCH_BY_ID, payload: res.data });
}

export const signup = (formProps, callback) => async dispatch => {
    console.log(formProps);
    try {
      const response = await axios.post(
        '/api/signup',
        formProps
      );

      dispatch({ type: AUTH_USER, payload: response.data.token });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: FETCH_ERROR, payload: 'Email in use' });
    }
  };

  export const signin = (formProps, callback) => async dispatch => {
    try {
      const response = await axios.post(
        '/api/signin',
        formProps
      );
      console.log(formProps)
      //console.log(response.data.token)
      dispatch({ type: AUTH_USER, payload: response.data.token });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({ type: FETCH_ERROR, payload: 'Invalid login credentials' });
    }
  };
