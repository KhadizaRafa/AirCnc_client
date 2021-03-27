export const ADD_USERS_TRAVEL_INFO = 'ADD_USERS_TRAVEL_INFO'

export const addTravelInfo = (travelInfo)=>{
    return {
        type: ADD_USERS_TRAVEL_INFO,
        travelInfo
    }
}