import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Link } from '@material-ui/core';
import SendMessage from "./sendMessage";
import Icon from '@material-ui/core/Icon';
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    pane: {
        marginTop: "inherit"
    },
    paper: {
        padding: '6px 16px',
    },
    root: {
        marginTop: "15px",
        flexGrow: 1,
    },
    image: {
        width: "100%"
    }
}));

const AboutInfo = ({ label, text, icon }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft: '10px'
        }}>
            <Icon className={`fa ${icon} mat-icon`} />
            <Typography variant="body1">
                <b>{label}: </b> {text}
            </Typography>
        </div>
    )
}

const UseFulLinks = ({ label, link, icon }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            marginLeft: '10px'
        }}>
            <Icon className={`${icon} mat-icon`} />
            <Typography variant="body1">
                <Link color={'inherit'} href={link} target={'_blank'}>{label}</Link>
            </Typography>
        </div>
    )
}

const ContactComponent = () => {
    const classes = useStyles();
    const about = useSelector(state => state.about);

    return (
        <div className={classes.pane}>
            <Typography variant="h4">
                Sidharth Patnaik
            </Typography>
            <AboutInfo icon={'fa-envelope'} label={'Email'} text={'patnaik.sid96@gmail.com'} />
            <AboutInfo icon={'fa-mobile'} label={'Phone'} text={'+91 8249335342'} />
            <AboutInfo icon={'fa-map-marker-alt'} label={'Locaiton'} text={'Bangalore Urban, India.'} />
            <Grid container className={classes.root} spacing={3}>
                <Grid item xs={false} sm={4} md={4}>
                    <img alt="Contacts QR" className={classes.image} src="https://firebasestorage.googleapis.com/v0/b/portfolio-1b3d4.appspot.com/o/contactQR.png?alt=media&token=72c79f62-d39a-45c6-bff2-0706da737ea0" />
                </Grid>
                <Grid item xs={12} sm={8} md={8} elevation={3}>
                    <Typography variant="h5">
                        Useful links:
                    </Typography>
                    <Grid container className={classes.root} spacing={3}>
                        {
                            about.links.map((item, index) => (
                                <Grid key={`link_${index}`} item xs={6} sm={6} md={4} elevation={3}>
                                    <UseFulLinks icon={item.icon} label={item.text} link={item.link} />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Typography style={{ marginTop: "15px" }} variant="h5">
                        Drop a message!
                    </Typography>
                    <SendMessage />
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactComponent;