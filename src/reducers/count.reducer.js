const countReducer = (state = 1 , action) => {
    switch(action.type) {
        case "inc": 
            return state + 1;
        default:
            return state;
    }
}

export default countReducer;