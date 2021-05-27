import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from "react-redux"
import { Typography, IconButton, Chip, Avatar, Link, Paper, Grid } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: "inherit",
        padding: '6px 16px',
    },
    techStack: {
        marginBottom: "10px",
        marginTop: "5px"
    },
    techChip: {
        margin: '2px'
    },
    root: {
        marginTop: "15px",
        flexGrow: 1,
    },
    imagePaper: {
        padding: "5px 5px 0px 5px"
    },
    image: {
        width: "100%"
    }
}));

const ProjectDetails = () => {
    const work = useSelector(state => state.work);
    const dispatch = useDispatch();
    const classes = useStyles();
    const { currentProject } = work;

    return (
        <Paper className={classes.paper}>
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
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={5} elevation={3}>
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
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7} elevation={3}>
                    <Paper className={classes.imagePaper} elevation={3} >
                        <img alt="Contacts QR" className={classes.image} src={currentProject.image || 'https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/project.png?alt=media&token=04851617-3cdf-4cde-beeb-5b567c6498cd'} />
                    </Paper>
                </Grid>
            </Grid>
            {
                currentProject.demo &&
                <div>
                    <Typography style={{ marginTop: "10px" }} variant="body1">
                        Demo: <Link color={'inherit'} href={currentProject.demo.link} target={'_blank'}>{currentProject.demo.text}</Link>
                    </Typography>
                </div>
            }
        </Paper>
    )
}

export default ProjectDetails;