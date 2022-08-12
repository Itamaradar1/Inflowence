import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import {createNewUser} from "../../store/actions/registration_validation"

const RegisterThankYou = () => {
   

    return(
        <div className="hero min-h-screen bg-background" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Thank you for registering you will be redirected to the login page in a few seconds. Please press <Link to="/login" style={{color:"#0645AD"}}>here </Link>
                   to be redirected immediately.</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default RegisterThankYou ;