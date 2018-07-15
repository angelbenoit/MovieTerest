import { FETCH_POPULAR, RESET_POPULAR } from "../Actions/types";

let initialList = [];

export default function(state = initialList, action){
    switch(action.type){
        case FETCH_POPULAR:
            //return action.payload || false;
            initialList = initialList.concat(...action.payload.results);
            //console.log(initialList);
            return initialList || false;

        case RESET_POPULAR:
            initialList = action.payload;
            return initialList;

        default:
            return state;
    }
}