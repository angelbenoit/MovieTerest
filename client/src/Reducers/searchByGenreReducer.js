import { FETCH_SEARCH_BY_GENRE, RESET_POPULAR } from "../Actions/types";

var initialList = [];

export default function(state = initialList, action){
    switch(action.type){
        case FETCH_SEARCH_BY_GENRE:
            return [...state, ...action.payload];

        case RESET_POPULAR:
            initialList = [];
            return initialList;

        default:
            return state;
    }
}