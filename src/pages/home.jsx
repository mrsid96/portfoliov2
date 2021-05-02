import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Link } from "react-router-dom";
import { pullAboutDetails } from "./../actions/about.actions"
import LinearProgress from '@material-ui/core/LinearProgress';
import About from "../components/about";

//redux Hooks
import { useDispatch, useSelector } from 'react-redux';


function Copyright({theme}) {
  const color = theme === 'dark' ? "#FFF" : "#000";
  return (
    <>
      <Typography variant="body2" color="textSecondary">
        {`© Sidharth Patnaik - ${new Date().getFullYear()} | `}
        <Link style={{ color }} to="/dashboard" color="white">
          Dashboard
      </Link>
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
  },
  footer: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: "#FFF"
  },
}));
const MainPage = () => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme);
  const about = useSelector(state => state.about);

  const toggleTheme = () => {
    dispatch({
      type: "toggleDarkMode"
    })
  }

  const switchTab = (event, newValue) => {
    setTabIndex(newValue);
  };

  useEffect(async () => {
    await pullAboutDetails(dispatch);
    setLoading(false);
  });

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={4} className={classes.image} />
      <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square>
      { isLoading && <LinearProgress />}
        <div className={classes.toggleTheme}>
          <IconButton onClick={toggleTheme} aria-label="delete">
            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
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
            !isLoading && (
              <About/>
            )
          }
        </div>
        <div className={classes.footer}>
          <Copyright theme={theme}/>
        </div>
      </Grid>
    </Grid>
  );
}

export default MainPage;