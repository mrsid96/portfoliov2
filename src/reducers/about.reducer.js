const initialState = {
    intro: "This dude to the left is not just another developer! He strongly believes that live shouldn't be stuck between 0s and 1s.<br/>Currently, he is working in a financial domain, building Onboarding products and Solutions.",
    life: ["Likes to wake up early, essentially an early bird", "Loves traveling, and playing keyboard", "Likes to play games on console, over weekend.", "A Die hard Naruto fan (!Boruto)","When free and tired of doing nothing, reads kindle."]
}

const aboutReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "getAboutSection":
            return state;
        default:
            return state;
    }
}

export default aboutReducer;