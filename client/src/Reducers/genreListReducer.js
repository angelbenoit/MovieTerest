
import { FETCH_GENRE_LIST, RESET_GENRE_LIST } from "../Actions/types";

var initialList = [];

export default function(state = initialList, action){
    switch(action.type){
        case FETCH_GENRE_LIST:
            return [...state, ...action.payload];

        case RESET_GENRE_LIST:
            return [...action.payload];

        default:
            return state;
    }
}