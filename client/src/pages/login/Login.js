import React from 'react';
import { useState, useEffect, } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

function Login() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <div className="login-pg">
                <TextField
                    id="outlined-full-width"
                    label="First Name"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Last Name"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="password"
                    variant="outlined"
                />

                <Button variant="contained" color="primary">
                    Login
                </Button>  &nbsp;
                <Link to={'/register'} >
                    <Button variant="contained" color="primary">
                        Register
                </Button>
                </Link>
            </div>
        </React.Fragment>
    );
}
export default Login;


