import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { auth } from "../firebase";

//redux Hooks
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignInComponent = (props) => {

    const dispatch = useDispatch();
    const [login, setLogin] = useState();

    const handleSubmit = async (event) => {
        console.log("Handling submit")
        event.preventDefault();
        const { email, password } = login;
        try {
            const data = await auth.signInWithEmailAndPassword(email, password);
            console.log(data.user.uid);
            dispatch({
                type: "addUserDetails",
                payload: {
                    email: data.user.email,
                    uid: data.user.uid,
                    displayName: data.user.displayName
                }
            });
            dispatch({
                type: "inc"
            })
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin({
            ...login,
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
                Sign In
            </Button>
        </form>
    );
}

export default SignInComponent;