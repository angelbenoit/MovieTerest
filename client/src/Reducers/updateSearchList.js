import { FETCH_SEARCH_LIST } from "../Actions/types";

const initialUserState = [];

export default function(state = initialUserState, action){
    //console.log(state);
    switch(action.type){
        case FETCH_SEARCH_LIST:
            return [...state, action.payload]

        default:
            return state;
    }
}