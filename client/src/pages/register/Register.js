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

    const fnameHandler = (e) => {
        setFname(e.currentTarget.value);
    }
    const lnameHandler = (e) => {
        setLname(e.currentTarget.value);
    }
    const emailHandler = (e) => {
        setEmail(e.currentTarget.value);
    }
    const mbHandler = (e) => {
        setMobilenumber(e.currentTarget.value);
    }
    const locHandler = (e) => {
        setLocation(e.currentTarget.value);
    }
    const taHandler = (e) => {
        setTypeofaccount(e.currentTarget.value);
    }
    const techHandler = (e) => {
        setTech(e.currentTarget.value);
    }
    const descrHandler = (e) => {
        setDescr(e.currentTarget.value);
    }
    const passHandler = (e) => {
        setPassword(e.currentTarget.value);
    }
    const cpassHandler = (e) => {
        setCpassword(e.currentTarget.value);
    }
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
        const payLoad = {
            fname: fname,
            lname: lname,
            email: email,
            mobilenumber: mobilenumber,
            location: location,
            typeofaccount: typeofaccount,
            technologies: tech,
            descr: descr,
            password: password,
            cpassword: cpassword,
        }
        axios.post('/register', payLoad).then((res) => {
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
                    onChange={fnameHandler}
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
                    onChange={lnameHandler}
                />
                <TextField
                    id="outlined-full-width"
                    label="Email"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={emailHandler}
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
                    onChange={mbHandler}
                />
                <TextField
                    id="outlined-full-width"
                    label="Location"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={locHandler}
                />

                <TextField
                    id="outlined-full-width"
                    label="Type of account"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={taHandler}
                />
                <TextField
                    id="outlined-full-width"
                    label="Technologies"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={techHandler}
                />
                <TextField
                    id="outlined-full-width"
                    label="Descr"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={descrHandler}
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
                    variant="outlined"
                    onChange={passHandler}
                />
                <TextField
                    id="outlined-full-width"
                    label="Confirm Password"
                    style={{ margin: 8 }}
                    placeholder="Type Here"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    onChange={cpassHandler}
                />

                <Link to={'/login'} >
                    <Button variant="contained" color="primary"
                        // disabled
                        onClick={createUser}>
                        Register
                     </Button> &nbsp;
                </Link>
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


