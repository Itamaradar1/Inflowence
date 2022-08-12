
import StatsBar from "../stats"
import { connect } from 'react-redux';


const InfluencerProfile = (props) => {
  
  console.log(props)
  return (
      <>
      <div className="flex flex-col mx-7 ">
        <div className="flex flex-col card bg-contentcard shadow-lg p-6 rounded-box  place-items-left ">
          <h1 className="flex justify-center font-black pb-4 ">Profile info</h1>
            <div className="grid grid-cols-2 gap-6 ">
          
            <p className="border-b">User name: {props.ReducerUserAuth.user.userName}</p>
            <p className="border-b">First name: {props.ReducerUserAuth.user.firstName}</p>
            <p className="border-b">Last name: {props.ReducerUserAuth.user.lastName}</p>
            <p className="border-b">Avatar: {props.ReducerUserAuth.user.avatar}</p>
            <p className="border-b">Age: {props.ReducerUserAuth.user.age}</p>
            <p className="border-b">Country: {props.ReducerUserAuth.user.country}</p>
            <p className="border-b">Gender: {props.ReducerUserAuth.user.gender}</p>
            <p className="border-b">Language: {props.ReducerUserAuth.user.language}</p>
            <p className="border-b">categories: {props.ReducerUserAuth.user.categories}</p> 
            <button className="btn btn-primary w-1/2">EDIT</button>
            </div>
            
        </div> 
        
          <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg p-6 rounded-box my-7 place-items-left">
            <h1 className="flex justify-center font-black p-2 ">Campaigns</h1>
            <div className="grid grid-cols-2 gap-2 p-2 ">
            <p className="border-b">Total campaigns: 3</p>
            <p className="border-b">campaigns: {props.ReducerUserAuth.user.campaigns}</p>
            <p className="border-b">Total monthly revenue: 10,000$</p>
            <p className="border-b">Total revenue: 35,000$</p>
            <p className="border-b">Total costs: 2,000$</p>
            <p className="border-b">Total profit: 33,000$</p>
            </div>
          </div> 
          <StatsBar className="mb-[20px]"/>
        </div>             
    </>    
  );
}

const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect(mapStateToProps)( InfluencerProfile);
