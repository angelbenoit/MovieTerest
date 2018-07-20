
import { FETCH_GENRE_LIST, RESET_POPULAR } from "../Actions/types";

var initialList = [];

export default function(state = initialList, action){
    switch(action.type){
        case FETCH_GENRE_LIST:
            return [...state, ...action.payload];

        case RESET_POPULAR:
            initialList = [];
            return initialList;

        default:
            return state;
    }
}