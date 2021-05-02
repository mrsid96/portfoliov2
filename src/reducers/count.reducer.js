const countReducer = (state = 1 , action) => {
    console.log("countReducer", state, action);
    switch(action.type) {
        case "inc": 
            return state + 1;
        default:
            return state;
    }
}

export default countReducer;