import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import LoginButton from "./login_button";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAndDispatchToken, loadUserData} from "../store/actions/registration_validation";


const LoginContainer = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

   const togglePassword = () =>{
     props.toggleforgetPassword(true);
   }

   const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

   const onClickButton = (e) => {
    e.preventDefault();
    dispatch({type:"setEmail", payload:email});
    
    dispatch((dispatch, getState) =>
    loadUserData(dispatch, getState, email));

    dispatch((dispatch, getState) =>
    fetchAndDispatchToken(
        dispatch,
        getState,
        email,
        password,
        navigate,
        props
      )
    );
  };

    return(
        <div className="hero min-h-screen bg-background" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse w-1/4">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={onClickButton}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    onChange={onEmailChange}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    onChange={onPasswordChange}
                  />
                  <label className="label">
                    <span className="label-text-alt link link-hover" onClick={togglePassword}>Forgot password?</span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
}

const mapStateToProps = (reduxState) => {
  return reduxState
}
export default connect(mapStateToProps)(LoginContainer);