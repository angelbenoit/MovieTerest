import { FETCH_GENRE_LIST } from "../Actions/types";

export default function(state = {}, action){
    switch(action.type){
        case FETCH_GENRE_LIST:
            return action.payload || false;
        default:
            return state;
    }
}