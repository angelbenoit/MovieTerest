import axios from 'axios';
import { FETCH_USER, FETCH_POPULAR, FETCH_MODAL } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({type: FETCH_USER, payload: res.data});
};

export const fetchPopular = (searchTypeFormat, page) => async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/discover/${searchTypeFormat}?api_key=508d690fdc412430a70ba8b4d841b0e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`);
    dispatch({type: FETCH_POPULAR, payload: res.data});
};

export const modalDisplay = (data) => async (dispatch) => { //data to be displayed in the modal
    console.log(data);
    dispatch({ type: FETCH_MODAL, payload: data })
}



