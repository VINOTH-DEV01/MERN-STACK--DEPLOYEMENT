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
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');

    
    const classes = useStyles();
    const loginUser = () => {
        const payLoad = {
            fname: uname,
            password: pass,
        }
        axios.get('/user/learnerLogin', payLoad).then((res) => {
            console.log(res);
            window.location.href='/mentorslist';
        });
    }
    const unameHandler = (e) => {
        setUname(e.currentTarget.value);
    }
    const passHandler = (e) => {
        setPass(e.currentTarget.value);
    }
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
                    onChange={unameHandler}
                />
                <TextField
                    id="outlined-full-width"
                    label="Password"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    type="password"
                    variant="outlined"
                    onChange={passHandler}
                />

                <Button variant="contained" color="primary" 
                onClick={loginUser} 
                >
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


