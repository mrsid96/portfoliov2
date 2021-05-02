import { getAboutSection } from "../firebase";

const pullAboutDetails = async (dispatch) => {
    const data = await getAboutSection();
    dispatch({
        type: "setAboutDetails",
        payload: data
    })
}

export {
    pullAboutDetails
}