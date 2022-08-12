import {Link} from "react-router-dom";
import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
// import { registration } from '../store/actions/registration_validation';
import validator from 'validator';

const BookADemoContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [email,setEmail] = useState("");
  

  const emailValidation = () =>{
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!email || regex.test(email) === false){
          alert("It is not a valid email or Email already exists")
          return false;
      }
      return true;

  }
  const onSubmit = () => {
    if(emailValidation()){
      navigate("/thank_you")
    }
    
  }
    return(
        <div className="hero min-h-screen bg-background" style={{backgroundImage: 'url(https://api.lorem.space/image/fashion?w=1000&h=800)'}}>
        <div className="hero-content flex-col lg:flex-row-reverse w-1/4">
          <div className="text-center lg:text-left">
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>
              <div className="form-control mt-6">
                <button label="Register" className="btn btn-primary" onClick={()=>onSubmit()}>Book A Demo</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default BookADemoContainer;
