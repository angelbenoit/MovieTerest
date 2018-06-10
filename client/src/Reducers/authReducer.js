import { FETCH_USER, FETCH_DISCOVER } from "../Actions/types";

export default function(state = null, action){
    switch(action.type){
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    }
}