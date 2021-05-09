
const userReducer = (state = {} , action) => {
    switch(action.type) {
        case "addUserDetails": 
            return action.payload;
        case "removeUserDetails": 
            return {}
        default:
            return state;
    }
}

export default userReducer;