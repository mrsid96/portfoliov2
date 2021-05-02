const themeMode = (state = 'dark' , action) => {
    switch(action.type) {
        case "toggleDarkMode": 
            return state === 'dark' ? 'light' : 'dark';
        default:
            return state;
    }
}

export default themeMode;