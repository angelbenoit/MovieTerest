import { FETCH_SEARCH_BY_GENRE } from "../Actions/types";

export default function(state = {}, action){
    switch(action.type){
        case FETCH_SEARCH_BY_GENRE:
            return action.payload || false;
        default:
            return state;
    }
}