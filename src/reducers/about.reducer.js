const initialState = {
    intro: "",
    life: [],
    skills: [],
    links: []
}

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setAboutDetails":
            return action.payload;
        default:
            return state;
    }
}

export default aboutReducer;