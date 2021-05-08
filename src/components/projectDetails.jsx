import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux"
import { Typography, IconButton, Chip, Avatar, Link} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    pane: {
        marginTop: "inherit"
    },
    paper: {
        padding: '6px 16px',
    },
    techStack: {
        marginBottom: "10px",
        marginTop: "5px"
    },
    techChip: {
        margin: '2px'
    },
}));

const ProjectDetails = () => {
    const work = useSelector(state => state.work);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { currentProject } = work;

    return (
        <div className={classes.pane}>
            <IconButton onClick={() => {
                dispatch({
                    type: "showProjectDetails",
                    payload: {}
                });
            }} aria-label="delete">
                <ArrowBackIcon />
            </IconButton>
            <Typography variant="h5">
                {currentProject.projectName}
            </Typography>
            <Typography className={classes.techStack} color="textSecondary">
                {
                    currentProject.technologies.map((item, index) => (
                        <Chip className={classes.techChip} key={`${item}_${index}`}
                            variant="outlined"
                            size="small"
                            label={item}
                            avatar={<Avatar>{item[0].toUpperCase()}</Avatar>}
                        />
                    ))
                }
            </Typography>
            <Typography variant="body1">
                {currentProject.summary}
            </Typography>
            <Typography style={{ marginTop: "10px" }} variant="body1">
                {"Detailed description: "}
            </Typography>
            <ul>
                {
                    currentProject.details && currentProject.details.map((item, index) => (
                        <li key={`det_${index}`}>{item}</li>
                    ))
                }
            </ul>
            {
                currentProject.demo &&
                <div>
                    <Typography style={{ marginTop: "10px" }} variant="body1">
                        Demo: <Link color={'inherit'} href={currentProject.demo.link} target={'_blank'}>{currentProject.demo.text}</Link>
                    </Typography>
                </div>
            }
        </div>
    )
}

export default ProjectDetails;