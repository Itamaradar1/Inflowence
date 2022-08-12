import { baseurl } from "../baseurl";

export const registration = (dispatch,getState,email,navigate) => {
  const url = "";
  const method = "POST";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => {response.json()
  if(response.status === 200) {
    dispatch({type:"email",payload:email});
    localStorage.setItem("email",email);
    navigate("/registration/confirmation");
  }else return  alert("Email already exists or no input was given")
  });
  }

export const createNewInfluencer = (dispatch,getState,props,username,email,password,navigate) => {
  const url= "https://inflowence.propulsion-learn.ch/backend/users/registration/";
  const method = "POST";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {username,email,password};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => {
  if(response.status === 201) { // try and catch and console error
    props.toggleRegister(true);
    dispatch({type:"setInfluencer",payload:true});
    validateNewUser(dispatch,getState,props,username,email,password,navigate);
  }else return  alert("Email already exists or no input was given")
  })
}

export const validateNewUser = (dispatch,getState,props,username,email,password,navigate) => {
  const url = "https://inflowence.propulsion-learn.ch/backend/users/validation/";
  const method = "PATCH";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {username,email,password};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => {response.json()
  if(response.status === 200) {
    dispatch({type:"email",payload:email});
    dispatch({type:"setUsername",payload:username});
    localStorage.setItem("email",email);
    setTimeout(() => navigate("/login"), 1500)
  }else return  alert("Email already exists or no input was given")
  });
}

export const fetchAndDispatchToken = (dispatch, getState, email, password, navigate, props) => {
  const url = `https://inflowence.propulsion-learn.ch/backend/api/token/`;
  const method = "POST";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email,password};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
      if(data.access){
          localStorage.setItem("token",data.access);
          dispatch({type:"setToken", payload:data.access});
          Navigate(dispatch, getState, email, navigate);
      }else if(!data.access){
        return alert("Please use an exsisting Email or password");
      }
  })
}


export const forceFetchAndDispatchToken = (email, password, navigate) => {
  console.log('in the force and dispatch')
  const url = `https://inflowence.propulsion-learn.ch/backend/api/token/`;
  const method = "POST";
  const headers = new Headers({'Content-type':'application/json'});
  let body = {email,password};
  body = JSON.stringify(body);    
  const config = {method,headers,body}
  fetch(url,config)
  .then(response => response.json())
  .then(data => {
      console.log('this data', data)
      if(data.access){
          localStorage.setItem("token",data.access);
          navigate("/company");
      }else if(!data.access){
        return alert("Please use an exsisting Email and password");
      }
  })
}


export const loadUserData = (dispatch, getState, email) => {
  const url = `https://inflowence.propulsion-learn.ch/backend/users/search/` + email;
  const method = "GET";
  const headers = new Headers({'Content-type':'application/json'});
  const config = {method,headers}
  fetch(url, config)
  .then(response => response.json())
  .then(data => {
    if(data.company_profile){
      dispatch({type:"setisCompany" , payload:""});
      dispatch({type:"setCompanyProfile" , payload:data.influencer_profile});
    }
    else if(data.influencer_profile){
      dispatch({type:"setIsInfluencer" , payload:""});
      dispatch({type:"setInfluencerProfile" , payload:data.influencer_profile});
    }
  })
}

export const Navigate = (dispatch, getState, email, navigate) => {
  const url = `https://inflowence.propulsion-learn.ch/backend/users/search/` + email;
  const method = "GET";
  const headers = new Headers({'Content-type':'application/json'});
  const config = {method,headers}
  fetch(url, config)
  .then(response => response.json())
  .then(data => {
    if(data.company_profile){
      navigate("/company");
    }
    else if(data.influencer_profile){
      navigate("/profile");
    }
  })
}