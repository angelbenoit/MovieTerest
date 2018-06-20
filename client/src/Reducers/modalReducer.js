import { FETCH_MODAL } from "../Actions/types";

export default function(state = {}, action){
    switch(action.type){
        case FETCH_MODAL:
            return action.payload || false;
        default:
            return state;
    }
}