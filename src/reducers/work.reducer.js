const initialState = {
    experience: [],
    projects:[]
}

const workReducer = (state = initialState, action) => {
    switch(action.type) {
        case "setExperienceData":
            return {
                ...state,
                experience: action.payload
            }
        case "setProjectData": 
            return {
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}

export default workReducer;