import React, { useState, useEffect } from 'react';
import {CssBaseline, Paper, Grid, Typography, Tabs, Tab, IconButton, LinearProgress} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Link } from "react-router-dom";
import { pullAboutDetails } from "./../actions/about.actions"
import { pullExperiences, pullProjects } from "../actions/work.actions"
import About from "../components/about";
import Skills from '../components/skills';
import WorkComponent from "../components/work";
import ContactComponent from "../components/contact";

//redux Hooks
import { useDispatch, useSelector } from 'react-redux';


function Copyright({ theme }) {
  const color = theme === 'dark' ? "#FFF" : "#000";
  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {`© Sidharth Patnaik - ${new Date().getFullYear()} | `}
        <Link style={{ color }} to="/dashboard" color="white">
          Dashboard
        </Link>
        {` | `}
        <a style={{ color }} href="https://blog.sidharthpatnaik.in/" target="_blank" rel="noreferrer">
          Blog
        </a>
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {`Made with ❤️ using React and Firebase`}
      </Typography>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/homeSide.jpg?alt=media&token=f40e3ca2-1404-4e4e-97e8-cc2f666e955b)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column'
  },
  tabPane: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  toggleTheme: {
    position: 'absolute',
    borderBottomRightRadius: "50%"
  },
  mainPane: {
    height: '100vh',
    overflow: 'auto'
  },
  footer: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: "#FFF"
  },
}));

const GetTabbedComponent = ({ tabIndex }) => {
  if (tabIndex === 0)
    return (
      <>
        <About />
        <Skills />
      </>
    )
  else if (tabIndex === 1)
    return <WorkComponent />
  else if (tabIndex === 2)
      return <ContactComponent/>
  return (
    <Typography variant="h4" >
      Coming soon!
    </Typography>
  )
}

const MainPage = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);

  const toggleTheme = () => {
    dispatch({
      type: "toggleDarkMode"
    })
  }

  const switchTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    async function fetchData() {
      await pullAboutDetails(dispatch);
      await pullExperiences(dispatch);
      await pullProjects(dispatch);
      setLoading(false);
    }
    fetchData();
  }, [dispatch]);

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid className={classes.mainPane} item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
        {isLoading && <LinearProgress />}
        <Paper elevation={3} className={classes.toggleTheme}>
          <IconButton onClick={toggleTheme} aria-label="delete">
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Paper>
        <div className={classes.paper}>
          <div className={classes.tabPane}>
            <Tabs
              value={tabIndex}
              indicatorColor={theme === 'dark' ? "secondary" : "primary"}
              textColor="inherit"
              aria-label="disabled tabs example"
              onChange={switchTab}
            >
              <Tab label="Home" />
              <Tab label="Work" />
              <Tab label="Contact" />
            </Tabs>
          </div>
          {
            !isLoading && <GetTabbedComponent tabIndex={tabIndex} />
          }
        </div>
        <div className={classes.footer}>
          <Copyright theme={theme} />
        </div>
      </Grid>
    </Grid>
  );
}

export default MainPage;