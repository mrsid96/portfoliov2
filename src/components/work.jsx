import React from "react";
import {useSelector} from "react-redux";
import Experience from "./experience";
import ProjectList from "./projectList"
import ProjectDetails from "./projectDetails"

const WorkComponent = () => {
    const work = useSelector(state => state.work);

    return (
        <>
            {work.currentProject && !work.currentProject.projectName ? 
                <ProjectList/> :
                <ProjectDetails/>
            }
            <Experience/>
        </>
    )
}

export default WorkComponent;