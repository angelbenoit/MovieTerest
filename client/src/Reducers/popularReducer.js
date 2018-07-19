import { FETCH_POPULAR, RESET_POPULAR } from "../Actions/types";

var initialList = [];

export default function(state = initialList, action){
    switch(action.type){
        case FETCH_POPULAR:
            //return action.payload || false;
            //state = initialList.concat(...action.payload);
            //console.log(state);
            return [...state, ...action.payload];

        case RESET_POPULAR:
            initialList = [];
            return initialList;

        default:
            return state;
    }
}