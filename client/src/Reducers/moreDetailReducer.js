import { FETCH_BY_ID } from "../Actions/types";

export default function(state = {}, action){
    switch(action.type){
        case FETCH_BY_ID:
            return action.payload || false;
        default:
            return state;
    }
}