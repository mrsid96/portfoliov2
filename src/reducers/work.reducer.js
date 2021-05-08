const initialState = {
    experience: [],
    projects:[],
    currentProject: {},
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
        case "showProjectDetails": 
            return {
                ...state, 
                currentProject: action.payload
            }
        default:
            return state;
    }
}

export default workReducer;