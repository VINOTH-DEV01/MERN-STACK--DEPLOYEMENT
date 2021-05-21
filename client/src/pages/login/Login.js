import React from 'react';
import { useState, useEffect, } from 'react';
import axios from 'axios';
import './Login.css';

function Login() {
    return (
        <React.Fragment>
            <div className="login-pg">
                <div className="container">
                    <div className="demo-title">
                        <h3> Login </h3>
                        <p> Welcome to Vidu! Please enter your credential to login </p>
                        <div className="vidu-brd">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                    <div className="login-form textbox-h38">
                        <div className="row inputtextanimation ">
                            <div id="loginform">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"> EMAIL ID</label>
                                        <input type="email" className="form-control" id="useremailid" aria-describedby="emailHelp" placeholder="Enter your WORK email ID here*" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" className="form-control" id="loginpwd" aria-describedby="emailHelp" placeholder="XXXXXXXXXXXX " required="" />
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center">
                                    <div className="btn btn-default xlbtn" id="loginbtn-block">
                                        LOGIN
						                  </div>
                                </div>
                                <div className="col-sm-12 forgotpwd">
                                    <span> New User? <u> <a href="./register.php"> Register Here! </a> </u> </span>
                                    <span> <u id="forgetPasswordSubmit" > Forgot Password? </u></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Login;


