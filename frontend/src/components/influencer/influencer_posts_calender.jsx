import React from "react";
import {connect} from "react-redux";
import Google_Login from "../google_login";
import GoogleCalendar from "../google_calendar";
import Google_Logout from "../google_logout";




const InfluencerPostsCalendar = (props) => {

  return (
    <>
        <div className="flex flex-col mx-7 mb-10">
          <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg p-6 rounded-box  place-items-left ">
            <h1 className="flex justify-center font-black pb-4 "> Google Calendar</h1>

            {Object.keys(props.ReducerUserAuth.googleObject).length !== 0 
              ?
                <>
                  <GoogleCalendar />
                  <Google_Logout />
                </>
              :
              <>
                <p>Please login to your google account in order to see your google calendar:</p>
                <div>
                <Google_Login />
                </div>
              </>
            }
          </div>
        </div>
    </>
);
}

const mapStateToProps = (reduxState) => {
  return reduxState;   
}   

const connection = connect(mapStateToProps);
const connectedInfluencerPostsCalendar = connection(InfluencerPostsCalendar)

export default connectedInfluencerPostsCalendar;