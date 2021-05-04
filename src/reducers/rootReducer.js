import {combineReducers} from "redux"

import userReducer from "./user.reducer";
import countReducer from "./count.reducer";
import themeMode from "./themeMode.reducer";
import aboutReducer from "./about.reducer";
import workReducer from "./work.reducer"

const rootReducer = combineReducers({
    user: userReducer,
    count: countReducer,
    theme: themeMode,
    about: aboutReducer,
    work: workReducer
});

export default rootReducer;