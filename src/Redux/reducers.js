import { ADD_USERS_TRAVEL_INFO } from "./action";

const initialState = {
    travelInfo: []
}

const travelReducer = (state=initialState, action) =>
{
    switch (action.type) {
        case ADD_USERS_TRAVEL_INFO:
            return {
               travelInfo:[...state , action.travelInfo] 
            }
        default:
            return state;
    }
}

export default travelReducer;