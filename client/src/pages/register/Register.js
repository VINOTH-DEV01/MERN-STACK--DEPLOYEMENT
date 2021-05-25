import React from 'react';
import { useState, useEffect, } from 'react';
import axios from 'axios';
import './Register.css';
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

function Register() {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [mobilenumber, setMobilenumber] = useState('');
    const [location, setLocation] = useState('');
    const [typeofaccount, setTypeofaccount] = useState('');
    const [tech, setTech] = useState('');
    const [descr, setDescr] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [data, setData] = useState('');

    // useEffect(() => {
    //     axios.post('/register', {
    //         body: {
    //             fname: fname,
    //             lname: lname,
    //             email: email,
    //             mobilenumber: mobilenumber,
    //             location: location,
    //             typeofaccount: typeofaccount,
    //             technologies: tech,
    //             descr: descr,
    //             password: password,
    //             cpassword: cpassword
    //         }
    //     }).then((res) => {
    //         console.log(res);
    //         setData(res.data.productList);
    //     });
    // });
    const createUser = () => {
        axios.post('/register', {
            body: {
                fname: fname,
                lname: lname,
                email: email,
                mobilenumber: mobilenumber,
                location: location,
                typeofaccount: typeofaccount,
                technologies: tech,
                descr: descr,
                password: password,
                cpassword: cpassword
            }
        }).then((res) => {
            console.log(res);
            setData(res.data.productList);
        });
    }
    return (
        <React.Fragment>
            <div className="reg-pg">
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
                    value={fname}
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
                    variant="outlined"
                />
                <TextField
                    id="outlined-full-width"
                    label="Email Id"
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
                    label="Mobile Number"
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
                    label="Mobile Number"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <Button variant="contained" color="primary" onClick={createUser}>
                    Register
                </Button> &nbsp;

                <Link to={'/login'} >
                    <Button variant="contained" color="primary">
                        Login
                </Button>
                </Link>
            </div>
        </React.Fragment>
    );
}
export default Register;


