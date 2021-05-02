import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import { auth } from "../firebase";

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUpComponent = (props) => {

    const [register, setRegister] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = register;
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            setRegister({
                email: "",
                password: "",
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRegister({
            ...register,
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Register
            </Button>
        </form>
    );
}

export default SignUpComponent;