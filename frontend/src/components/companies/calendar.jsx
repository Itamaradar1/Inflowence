import Google_Login from "../google_login";
import Google_Logout from "../google_logout";
import connectedGoogleCalendar from "../google_calendar";
import { useSelector } from "react-redux";


const PostingCalendar = (props) => {

    const selector = reduxState => reduxState;
    const globalState = useSelector(selector)
    console.log(globalState)

    return(
        <div className="flex flex-col justify-start items-center w-full h-full" >
            <div className="flex flex-col justify-start w-3/4 lg:w-1/2 h-full mt-10" >
            <>
        <div className="flex flex-col mx-7 mb-10">
          <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg p-6 rounded-box  place-items-left ">
            <h1 className="flex justify-center font-black pb-4 "> Google Calendar</h1>

            {/* {Object.keys(props.ReducerUserAuth.googleObject).length !== 0 
              ?
                <>
                  <connectedGoogleCalendar />
                  <Google_Logout />
                </>
              :
              <>
                <p>Please login to your google account in order to see your google calendar:</p>
                <div>
                <Google_Login />
                </div>
              </>
            } */}
          </div>
        </div>
    </>
            </div>
        </div>
    )
}

export default PostingCalendar;