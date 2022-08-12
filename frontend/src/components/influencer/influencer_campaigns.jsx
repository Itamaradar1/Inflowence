import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { baseurl } from "../../store/baseurl";
import  nike  from '../../assets/images/nike.png';
import StatsBar from "../stats";
import { connect } from 'react-redux';


const InfluencerCampaigns = (props) => {
// global state
const selector = reduxState => reduxState.UserDataReducer;
const globalState = useSelector(selector)

// local state
// const [currentPage, setCurrentPage] = useState('campaigns')
// const [userData, setUserData] = useState({})
// const [companyData, setCompanyData] = useState({})
// const campaigns = props.campaigns

const [campaignData, setCampaignData] = useState(false)

// hooks
const dispatch = useDispatch();

useEffect(() => {
  const url = `${baseurl}users/me/`;
  const method = "GET";
  const headers = new Headers({'Authorization':`Bearer ${localStorage.getItem('token')}`});

  const config = {method,headers};
  fetch(url,config)
      .then(response => response.json())
      .then(data => {
          if(data){
            setCampaignData(data.user_profile.campaigns)
            dispatch({type:'saveUserData', payload:data})
          };
      });
  
}, [])

  return (
 <>
        <div className="flex flex-col items-center w-full " >
          <div id="campaign-header" className="flex flex-row justify-center items-center w-[95%] mb-6">
              <h1 className="color-secondary text-3xl font-bold mx-10">Search Campaigns</h1>
          </div>
            <div id="inflowencer-filters" className="flex flex-col justify-center items-center space-x-6 space-y-4 w-full lg:space-y-0 lg:flex-row mb-8">
                <div class="dropdown">
                  <button tabindex="0" class="btn btn-sm btn-primary">Filter</button>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                      <li><a href="#/">Highest Rating</a></li>
                      <li><a href="#/">Top Paid</a></li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row items-center w-1/2 space-y-2 space-x-2 lg:space-y-0 ">
                  <input type="text" placeholder="Type here" className="input h-8 flex-grow max-w-md" />
                  <button className="btn btn-sm btn-primary">Filter Category</button>
                </div>
            </div>  
 {/* campaign info */}
      <div className="flex flex-col mx-7 mb-6">
        <div className="flex flex-col h-full card bg-contentcard shadow-lg p-6 rounded-box justify-start ">
          <div id="campaign-header" className="flex flex-row justify-start items-center w-full">
          <h1 className="color-secondary text-2xl font-bold text-start ">Campaign Info</h1>
          </div>
         
          <div id="campaign-details" className="flex flex-col p-5 space-y-4 ">
            <h3 className="color-secondary text-xl font-bold">Campaign Details</h3>
              <div id="campaign-description">
                <h4 className="color-secondary text-md font-bold">Description</h4>
                {/* <h4 className="color-secondary text-md">{campaignData.description}</h4> */}
                <h4 className="color-secondary text-md">This shoe is a classic with a runway inspired look. It has been designed by one of our most famous designers and brings back the shape that defined the era. The large Air element ensures long lasting comfort and gives the shoe a casual look. The upper material is made of calfskin in a chic light brown colour. The sole is made of natural rubber, which is flexible but still robust.</h4>
              </div>
                <div id="campaign-images">
                  <h4 className="color-secondary text-md font-bold">Campaign Images</h4>
                  <img className="w-10" src={nike} alt="no-img"></img>
                </div>
                  <div id="product-details">
                    <h4 className="color-secondary text-md font-bold">Product Details</h4>
                    <ul>
                    <li>Colors: white, red, yellow</li>
                    <li>Materials: synthetic</li>
                    <li>Sports: Running</li>
                    </ul>
                  </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[95%] mb-20">
      <StatsBar />
      </div>
    </div>
  </>
  );
}

const mapStateToProps = (reduxState) => {
  return reduxState
}

export default connect (mapStateToProps) (InfluencerCampaigns);
