import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AdminPanel from "../components/AdminPanel";
import SignIn from "../components/singin";

//redux Hooks
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/login_sidebar.jpg?alt=media&token=dc0c2fc9-07a3-47b8-a4b1-f4e7910b5ed5)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        })
    },
    panel: {
        transition: theme.transitions.create("all", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    paper: {
        margin: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        color: theme.palette.error[50],
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Copyright({ theme }) {
    return (
        <>
            <Typography variant="body2" color="textSecondary" align="center">
                {`© Sidharth Patnaik - ${new Date().getFullYear()}`}
            </Typography>
        </>
    );
}

const Dashboard = () => {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const count = useSelector(state => state.count);
    const theme = useSelector(state => state.theme);

    console.log("THis is count", count);
    console.log("This is user", user);
    console.log("THis is userId", user.uid);

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={!user.uid ? 4 : false} md={user.uid ? 4 : 8} className={classes.image} />
            <Grid item xs={12} sm={user.uid ? 12 : 8} md={user.uid ? 8 : 4} component={Paper} elevation={6} square className={classes.panel}>
                {user.uid &&
                    <AdminPanel />
                }
                {!user.uid &&
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Authentication Required
                        </Typography>
                        <SignIn setUser />
                    </div>
                }
                <Copyright theme={theme} />
            </Grid>
        </Grid>
    );
}

export default Dashboard;