import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    root: {
        marginTop: "15px",
        flexGrow: 1,
    },
    pane: {
        marginTop: "inherit"
    }
}));

const GenerateSkillCard = ({ name, subset, progress }) => {
    return (
        <Paper elevation={3}>
            <div style={{ padding: "10px" }}>
                <Typography variant="h6">
                    {name}
                </Typography>
                <Typography variant="body1">
                    {subset.join(", ")}
                </Typography>
            </div>
            <LinearProgress color={'primary'} variant="determinate" value={progress} />
        </Paper>)
}

const WorkSkills = () => {
    const about = useSelector(state => state.about);
    const classes = useStyles();

    return (
        <div className={classes.pane}>
            <Typography variant="h5" className={classes.title}>
                His skill set 💁
            </Typography>
            <Grid container className={classes.root} spacing={3}>
                {
                    about.skills.map((item, index) => (
                        <Grid key={`skill-${index}`} item xs={12} sm={6} md={4} elevation={3}>
                            <GenerateSkillCard name={item.name} subset={item.subset} progress={item.progress} />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default WorkSkills;