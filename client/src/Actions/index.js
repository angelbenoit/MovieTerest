import axios from 'axios';
import { FETCH_USER, FETCH_POPULAR, FETCH_MODAL } from "./types";

export const fetchUser = () => async (dispatch) => {
    const res = await axios.get("/api/current_user");
    dispatch({type: FETCH_USER, payload: res.data});
};
// searchType is what type of search being done, if it is "discover"(intial), then it returns most popular
// if search Type is "search", a query will be required, which is initially empty.
export const fetchPopular = (searchType="discover", searchTypeFormat, page, query="") => async (dispatch) => {
    let url = `https://api.themoviedb.org/3/${searchType}/${searchTypeFormat}?api_key=508d690fdc412430a70ba8b4d841b0e0&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
    if(searchType === "search"){
        url = url + `&query=${query}`;
    }
    const res = await axios.get(url);
    dispatch({type: FETCH_POPULAR, payload: res.data});
};

export const modalDisplay = (data) => async (dispatch) => { //data to be displayed in the modal
    console.log(data);
    dispatch({ type: FETCH_MODAL, payload: data })
}



