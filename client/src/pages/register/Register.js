import React from 'react';
import { useState, useEffect, } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
    return (
        <React.Fragment>
            <div className="login-pg reg-pg">
                <div className="container">
                    <div className="demo-title">
                        <h3> Sign Up </h3>
                        <p> Welcome to Vidu! You are just few steps away from setup of your online education system </p>
                        <div className="vidu-brd">
                            <span></span><span></span><span></span>
                        </div>
                    </div>

                    <div className="reg-form textbox-h38">
                        <div className="row inputtextanimation ">
                            <div id="signupform">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="exampleInputFirst-name">FIRST NAME</label>
                                        <input type="text" className="form-control" id="firstname" aria-describedby="first-nameHelp" placeholder="Enter your First name here*" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">LAST NAME</label>
                                        <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter your Last name" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1"> EMAIL ID</label>
                                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email id" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="email" className="form-control" id="useremailid" aria-describedby="emailHelp" placeholder="Enter Password" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="exampleInputPhone1">MOBILE NO</label>
                                        <input type="text" className="form-control" id="phcode" aria-describedby="phoneHelp" placeholder="Enter your 10 digit mobile number*" required="" />
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="exampleInputOrgname">ORGANISATION NAME</label>
                                        <input type="text" className="form-control" id="orgname" aria-describedby="orgnameHelp" placeholder="Enter your organisation name" />
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center first-form">
                                    <div className="btn btn-default xlbtn btn-success">
                                        SIGN UP
		                  	</div>
                                </div>
                                <div className="col-sm-6 nxt-form" >
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" className="form-control" id="passwd" aria-describedby="emailHelp" placeholder="Enter Password" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-6" >
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" className="form-control" id="loginpwd" aria-describedby="emailHelp" placeholder="Enter Password" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 nxt-form" >
                                    <div className="form-group">
                                        <label for="exampleInputPhone1">Confirm Password</label>
                                        <input type="password" className="form-control" id="cpwd" aria-describedby="phoneHelp" placeholder="Confirm password" required="" />
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center nxt-form" >
                                    <div className="btn btn-default xlbtn" id="set-password-btn">
                                        Take me to my Academy
		                  	</div>
                                </div>
                                <div className="col-sm-12 text-center privacy-policy nxt1-form" >
                                    <span>
                                        We sent a verification mail to your mailId.
		                   	  		<u id="resendverifymail" >Resend Verification Link</u>
		                   	  	   Please verify your mail and phone number to login to the admin panel.
		                   	  	   <u id="resendyotp" >Resend OTP</u>
                                    </span>
                                </div>
                                <div className="col-sm-6 nxt1-form" >
                                    <div className="form-group">
                                        <label for="exampleInputPhone1">Verify OTP</label>
                                        <input type="number" className="form-control" id="verifyOtp" aria-describedby="phoneHelp" placeholder="Enter the 4 digit OTP you got." required="" />
                                    </div>
                                </div>
                                <div className="col-sm-6 text-center nxt1-form" >
                                    <div className="form-group">
                                        <div className="btn btn-default xlbtn" id="verifyotp-btn" >
                                            Verify
		                  		</div>
                                    </div>
                                </div>
                                <div className="col-sm-12 text-center privacy-policy nxt2-form" >
                                    <span>Phone number verified. If you have verified Email also. Try Login
		                   	  </span>
                                </div>
                                <div className="col-sm-12 text-center signin-form" >
                                    <div className="btn btn-default xlbtn" id="signup-login">
                                        Login
		                  	</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
export default Register;


