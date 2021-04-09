export const UPDATE_USERS_TRAVEL_INFO = 'UPDATE_USERS_TRAVEL_INFO'

export const updateTravelInfo = (travelInfo)=>{
    return {
        type: UPDATE_USERS_TRAVEL_INFO,
        travelInfo
    }
}