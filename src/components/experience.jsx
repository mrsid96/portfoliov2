import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Select from '@material-ui/core/Select';

import { useSelector } from "react-redux"


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
    },
    paper: {
        padding: '6px 16px',
    },
    generateProjectPaper: {
        padding: '6px 10px',
        cursor: 'pointer'
    },
    techStack: {
        marginBottom: "10px",
        marginTop: "5px"
    },
    techChip: {
        margin: '2px'
    },
    filterPane: {
        float: "right",
        marginLeft: 'auto'
    }
}));

const restraintChars = (string) => string.length > 150 ? `${string.substr(0, 150)} [...]` : string;

const arrayComparators = (source, destination) => source.some(item => destination.includes(item))

const GenerateProjectCard = ({ name, summary, technologies, showProject, index, classes, applyFilter }) => {
    return (
        <Paper onClick={() => showProject(index)} className={classes.generateProjectPaper} elevation={3}>
            <Typography variant="h5">
                {name}
            </Typography>
            <Typography variant="body1">
                {restraintChars(summary)}
            </Typography>
            <Typography className={classes.techStack} color="textSecondary">
                {/* {`Stack: ${technologies.join(", ")}`} */}
                {
                    technologies.map((item, index) => (
                        <Chip className={classes.techChip} key={`${name}_${item}_${index}`}
                            variant="outlined"
                            size="small"
                            label={item}
                            onClick={(e) => {
                                e.stopPropagation();
                                applyFilter(item);
                            }}
                            avatar={<Avatar>{item[0].toUpperCase()}</Avatar>} />
                    ))
                }
            </Typography>
        </Paper>
    )
}

const Experience = () => {
    const classes = useStyles();
    const work = useSelector(state => state.work);
    const [open, setOpen] = React.useState(false);
    const [currentProject, setProject] = useState({});
    const [filteredProjects, setFilteredProjects] = useState([])
    const [filters, setFilter] = useState([]);
    let filterSwap =[];

    useEffect(() => {
        setFilteredProjects(work.projects);
    }, [])

    const showProject = (index) => {
        setOpen(true);
        setProject(work.projects[index]);
    }

    const handleCLose = () => {
        setOpen(false);
        setProject({});
    }

    const generateFilteredProjects = () => {
        const updatedProjects = [];
        filteredProjects.forEach(project => {
            if(project.technologies && arrayComparators(project.technologies, filterSwap)){
                console.log(project.name)
                updatedProjects.push(project)
            }
        });
        setFilteredProjects(updatedProjects.length !== 0 ? updatedProjects : work.projects);
    }

    const applyFilter = (item) => {
        if(!filters.includes(item)){
            filterSwap = [...filters, item];
            setFilter([...filters, item])
            generateFilteredProjects();
        }
    }

    const removeFilter = (item) => {
        const index = filters.indexOf(item);
        if(index > -1){
            filters.splice(index, 1);
            filterSwap = [...filters];
            setFilter([...filters]);
            generateFilteredProjects();
        }
    }

    return (
        <div className={classes.pane}>
            <Typography variant="h5" className={classes.title}>
                Down the timeline
            </Typography>
            <Timeline align="left">
                {
                    work.experience.map((item, index) => (
                        <TimelineItem key={`exp_${index}`}>
                            <TimelineOppositeContent style={{ flex: 0.1 }}>
                                <Typography variant="body2" color="textSecondary">
                                    {item.span}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot>
                                    <WorkIcon />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h6" component="h1">
                                        {item.name}
                                    </Typography>
                                    <Typography>{item.content}</Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))
                }
            </Timeline>
            <div className={classes.pane}>
                <Typography variant="h5" className={classes.title}>
                    Some of the projects
                </Typography>
                *Click on a tag from below to filter apply filter
                <div className={classes.filterPane}>
                    {filters.length > 0 && <b>Filters: </b>}
                    {
                        filters.map((item, index) => (
                            <Chip
                                className={classes.techChip}
                                key={`${item}_${index}_filter`}
                                variant="outlined"
                                size="small"
                                label={item}
                                onDelete={() => {
                                    removeFilter(item);
                                }}
                                avatar={<Avatar>{item[0].toUpperCase()}</Avatar>}
                            />
                        ))
                    }
                </div>
                <Grid container className={classes.root} spacing={3}>
                    {
                        filteredProjects.map((item, index) => (
                            <Grid key={`project-${index}`} item xs={12} sm={6} md={6} elevation={3}>
                                <GenerateProjectCard
                                    name={item.projectName}
                                    summary={item.summary}
                                    technologies={item.technologies}
                                    showProject={showProject}
                                    index={index}
                                    classes={classes}
                                    applyFilter={applyFilter} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleCLose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{currentProject.projectName}</DialogTitle>
                <DialogContent>
                    <Typography style={{ marginBottom: "10px" }} variant="body1" component="p">
                        {currentProject.summary}
                    </Typography>
                    <Typography style={{ marginBottom: "10px" }}>
                        {`Stack: ${currentProject && currentProject.technologies && currentProject.technologies.join(", ")}`}
                    </Typography>
                    <Typography>
                        {"Detailed description: "}
                    </Typography>
                    <ul>
                        {
                            currentProject.details && currentProject.details.map((item, index) => (
                                <li key={`det_${index}`}>{item}</li>
                            ))
                        }
                    </ul>
                </DialogContent>
                <DialogActions>
                    <Button size="small" onClick={handleCLose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Experience;