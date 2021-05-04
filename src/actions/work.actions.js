import { getExperience, getProjects } from "../firebase";

const pullExperiences = async (dispatch) => {
    const data = await getExperience();
    dispatch({
        type: "setExperienceData",
        payload: data
    })
}

const pullProjects = async (dispatch) => {
    const data = await getProjects();
    dispatch({
        type: "setProjectData",
        payload: data
    })
}

export {
    pullExperiences,
    pullProjects
}