import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import {addMessage} from "../firebase"

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SendMessage = () => {
    const [messageDetails, setMessage] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { name, email, message } = messageDetails;
        try {
            console.log({ name, email, message });
            await addMessage(name, email, message);
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMessage({
            ...messageDetails,
            [name]: value,
        });
    };

    const classes = useStyles();
    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="message"
                label="Message"
                id="password"
                multiline
                rows={4}
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Send message
            </Button>
        </form>
    );
}

export default SendMessage;