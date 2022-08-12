import React from 'react';
import {connect} from "react-redux";




const GoogleCalendar = (props) => {

  const generateCalendar = (props) =>{
    
    const email = props.ReducerUserAuth.googleObject.profileObj.email;
    const link = 'https://calendar.google.com/calendar/embed?src='+ email +'&ctz=Europe%2FZurich';
    return (
          <iframe src={link} style={{border: "0"}} width="800" height="600" frameborder="0" scrolling="no"></iframe> 
    )
  }
  return (
    <div>
      {console.log(props)}
        {
            generateCalendar(props) 
        }
      </div>        
  );
}

const mapStateToProps = (reduxState) => {
  return reduxState;   
}   

const connection = connect(mapStateToProps);
const connectedGoogleCalendar = connection(GoogleCalendar)

export default connectedGoogleCalendar;