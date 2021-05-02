const initialState = {
    intro: "",
    life: [],
    skills: []
}

const skills = [
    {
        name: "NodeJs",
        subset: ["Express", "Fastify", "Workers"],
        progress: 90
    },
    {
        name: "FrontEnd",
        subset: ["ReactJs", "VueJs"],
        progress: 70
    },
    {
        name: "Database",
        subset: ["MySQL", "MongoDB", "redis"],
        progress: 70
    },
    {
        name: "DevOps",
        subset: ["Nginx", "Docker", "Kubernetes", "Jenkins"],
        progress: 50
    },
    {
        name: "Mobile",
        subset: ["Android", "Flutter"],
        progress: 50
    },
    {
        name: "Message Brokers",
        subset: ["RabbitMQ", "Kafka"],
        progress: 50
    },
];

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case "setAboutDetails":
            return { ...action.payload, skills }
        default:
            return state;
    }
}

export default aboutReducer;