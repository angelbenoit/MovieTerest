import { FETCH_POPULAR} from "../Actions/types";

export default function(state = [], action){
    switch(action.type){
        case FETCH_POPULAR:
            return action.payload || false;
        default:
            return state;
    }
}