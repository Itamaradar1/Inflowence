import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewInfluencer, validateNewUser } from "../../store/actions/registration_validation";

// = (dispatch,getState,email,password,navigate) => {}
const RegisterContainer = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onClickButton = (e) => {
    e.preventDefault();
    dispatch((dispatch, getState) =>
    createNewInfluencer(
        dispatch,
        getState,
        props,
        username,
        email,
        password,
        navigate
      )
    );
  };

  return (
    <div
      className="hero min-h-screen bg-background"
      style={{
        backgroundImage:
          "url(https://api.lorem.space/image/fashion?w=1000&h=800)",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse w-[50%]">
        <div className="text-center lg:text-left "></div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={onClickButton}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                  <span className="label-text">Username</span>
                  </label>
                    <input
                    type="text"
                    placeholder="username"
                    className="input input-bordered"
                    onChange={onUsernameChange}
                    />
                </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterContainer;
