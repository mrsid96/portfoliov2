import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ListItemText from '@material-ui/core/ListItemText';

//Redux 
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },
    pane: {
        marginTop: "inherit"
    },
    description: {
        marginTop: "15px"
    }
}));

const About = () => {
    const classes = useStyles();
    const about = useSelector(state => state.about);
    return (
        <div className={classes.pane}>
            <Typography variant="h4" className={classes.title}>
                Hey there <span className="wave">👋</span><br />
                This is Sidharth Patnaik.
            </Typography>
            <Typography variant="body1" className={classes.description} dangerouslySetInnerHTML={{ __html: about.intro }} />
            <Typography style={{ marginTop: "inherit" }} variant="h5" className={classes.title}>
                His life in a nutshell 🧑‍💼
            </Typography>
            <List>
                {
                    about.life.map((item, index) => (
                    <ListItem key={`life-${index}`}>
                        <ListItemAvatar>
                            <DoneAllIcon />
                        </ListItemAvatar>
                        <ListItemText>
                            <Typography variant="body1" className={classes.title}>
                                {item}
                            </Typography>
                        </ListItemText>
                    </ListItem>))
                }
            </List>
        </div>
    );
}

export default About;