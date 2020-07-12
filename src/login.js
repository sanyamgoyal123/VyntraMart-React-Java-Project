import React, { Component } from "react";
import './login.css';
export default class Login extends Component {
    render() {
        return (
            <div className="login-box">
                <div className="login-inner-box">
                    <form>
                        <h2>Sign In</h2>
                        <div className="form-group">
                            <label>Email address</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-dark">Submit</button>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot password?</a><br />
                            <a href="/signup">SignUp</a> 
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}