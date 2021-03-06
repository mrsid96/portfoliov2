import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography, Grid, Chip, Avatar, Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

import { useSelector, useDispatch } from "react-redux"


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
        marginTop: "10px"
    },
    techChip: {
        margin: '2px'
    },
    filterPane: {
        float: "right",
        marginLeft: 'auto'
    },
    media: {
        height: 140,
    },
}));

const restraintChars = (string) => string.length > 120 ? `${string.substr(0, 120)} [...]` : string;

const arrayComparators = (source, destination) => destination.every(val => source.includes(val));

const GenerateProjectCard = ({ name, image, summary, technologies, showProject, index, classes, applyFilter }) => {
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => showProject(index)}>
                <CardMedia
                    className={classes.media}
                    image={image || 'https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/project.png?alt=media&token=04851617-3cdf-4cde-beeb-5b567c6498cd'}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {restraintChars(summary)}
                    </Typography>
                    <div className={classes.techStack}>
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
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => showProject(index)} size="small" color="white">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

const ProjectList = () => {
    const classes = useStyles();
    const work = useSelector(state => state.work);
    const dispatch = useDispatch()
    const [filteredProjects, setFilteredProjects] = useState([])
    const [filters, setFilter] = useState([]);
    let filterSwap = [];

    useEffect(() => {
        setFilteredProjects(work.projects);
    }, [work])

    const showProject = (index) => {
        dispatch({
            type: "showProjectDetails",
            payload: {
                ...filteredProjects[index]
            }
        });
    }

    const generateFilteredProjects = () => {
        const updatedProjects = [];
        work.projects.forEach(project => {
            console.log(`Looking for ${filterSwap} in ${project.technologies} and got ${arrayComparators(project.technologies, filterSwap)}`)
            if (project.technologies && arrayComparators(project.technologies, filterSwap)) {
                updatedProjects.push(project)
            }
        });
        setFilteredProjects(filterSwap.length !== 0 ? updatedProjects : work.projects);
    }

    const applyFilter = (item) => {
        if (!filters.includes(item)) {
            filterSwap = [...filters, item];
            setFilter([...filters, item])
            generateFilteredProjects();
        }
    }

    const removeFilter = (item) => {
        const index = filters.indexOf(item);
        if (index > -1) {
            filters.splice(index, 1);
            filterSwap = [...filters];
            setFilter([...filters]);
            generateFilteredProjects();
        }
    }

    return (
        <div className={classes.pane}>
            <Typography variant="h5" className={classes.title}>
                Some of the projects
            </Typography>
            *Click on a tag from below to filter apply filter. <br />
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
                        <Grid key={`project-${index}`} item xs={12} sm={6} md={6} lg={4} elevation={3}>
                            <GenerateProjectCard
                                image={item.image}
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
    );
}

export default ProjectList;