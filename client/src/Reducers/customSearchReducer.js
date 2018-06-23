import { FETCH_CUSTOM } from "../Actions/types";

export default function(state = {}, action){
    switch(action.type){
        case FETCH_CUSTOM:
            return action.payload || false;
        default:
            return state;
    }
}