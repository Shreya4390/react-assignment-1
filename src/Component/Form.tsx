import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        background: 'white',

        '& .MuiTextField-root': {
            backgroundColor: '#e0daf8',
            margin: theme.spacing(1),
            width: '400px'
        },
        '& .MuiButtonBase-root': {
            margin: theme.spacing(2),
            background: '#311e75',
            color: 'white'
        },
    },
}));

function Form() {
    const classes = useStyles();
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    // create state variables for each input
    const [state, setState] = React.useState(initialState);

    const { firstName, lastName, email, password } = state;

    const onChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
        console.log(state);
    }, handleSubmit = e => {
        e.preventDefault();
        console.log(state);
    }, handleClose = () => {
        setState({ ...initialState });
        console.log(state);
    }
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
                label="First Name"
                variant="filled"
                required
                name='firstName'
                value={firstName}
                onChange={onChange}
            />
            <TextField
                label="Last Name"
                variant="filled"
                required
                name='lastName'
                value={lastName}
                onChange={onChange}
            />
            <TextField
                label="Email"
                variant="filled"
                type="email"
                required
                name='email'
                value={email}
                onChange={onChange}
            />
            <TextField
                label="Password"
                variant="filled"
                type="text"
                required
                name='password'
                value={password}
                onChange={onChange}
            />
            <div>
                <Button variant="contained" onClick={handleClose}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" >
                    Signup
                </Button>
            </div>
        </form>
    );
};

export default Form;