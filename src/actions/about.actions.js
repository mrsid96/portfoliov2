import { getAboutSection, updateSkills } from "../firebase";

const pullAboutDetails = async (dispatch) => {
    const data = await getAboutSection();
    dispatch({
        type: "setAboutDetails",
        payload: data
    })
}

const updateSkillsSet = async (dispatch, skills) => {
    const data = await updateSkills(skills);
    
    dispatch({
        type: "setAboutDetails",
        payload: data
    })
}

export {
    pullAboutDetails,
    updateSkillsSet
}