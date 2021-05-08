import React from 'react'
import { makeStyles, Typography } from '@material-ui/core';
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

const Experience = () => {
    const classes = useStyles();
    const work = useSelector(state => state.work);

    return (
        <div className={classes.pane}>
            <Typography variant="h5" className={classes.title}>
                Down the timeline
            </Typography>
            <div className="timelineContainer">
                {
                    work.experience.map((item, index) => (
                        <div key={`exp_${index}`} className='timeline-block timeline-block-right'>
                            <div className="marker"></div>
                            <div className="timeline-content">
                                <Typography variant="h6" className={classes.title}>
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" className={classes.title}>
                                    {item.span}
                                </Typography>
                                <Typography variant="body1" className={classes.title}>
                                    {item.content}
                                </Typography>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Experience;