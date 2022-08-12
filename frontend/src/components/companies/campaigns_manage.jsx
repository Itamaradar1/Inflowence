import Avatar from "../avatars/avatar";
import AvatarGroup from "../avatars/avatarGroup";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import InflowencerPopupSearch from "./inflowencers_popup_search";
import { useSelector } from "react-redux";
import CompanyProfileSidebar from "../side_bar_profile_company";
import { avatarArray } from "../../data/avatarData";

const ManageCampaigns = (props) => {

  // global state
   // global state
   const selector = reduxState => reduxState.UserDataReducer;
   const globalState = useSelector(selector)

  // props
  const setCurrentPage = props.setCurrentPage;
  const inflowencersArray = props.inflowencersArray;

  const { id } = useParams();
  console.log(' this is id' , id);
  const campaignData = props.campaigns[id]
  console.log(props.campaigns[3])

  const clickHandler = () => {
    console.log('clicked');
    setCurrentPage('Edit Campaign');
  }

  // name: 'AB-Speakers 3.0 Release',
  // budget_amount: 'USD 5,000,000',
  
  // location: 'Globally',
  // channels: 'Instagram, Facebook, Youtube',
  // description: "The Tesla Model 3 launch will occur this summer and the Tesla marketing team is organizing a great marketing campaign with influencers to showcase the product and build up hype for the release. The idea of the campaign is to market the product on several platforms and for several audiences.",
  // product: 'Tesla Model 3',
  // language: 'English',
  // date_created: '29-04-2022',
  // image: image1,
  // influencers: [1,2,3,4,5,6,7]
  // abvcg

  return(
      <div id="campaign-page-content-container" className="flex flex-col mt-1 w-3/4 justify-start px-10 py-5 lg:w-1/2" >
        {campaignData ? (
        <div className="flex flex-col w-full space-y-6">
        {/* Container with title and colored div */}
        <div id="campaign-header" className="flex flex-row justify-start items-center w-full">
          <h1 className="color-secondary text-4xl font-bold text-start">{campaignData.name}</h1>
        </div>
        {/* Content container*/}
        <div id="campaign-details" className="flex flex-col justify-start items-start bg-contentcard rounded-2xl w-full py-8 px-10 space-y-6 shadow-md">
          <h3 className="color-secondary text-xl font-bold">Campaign Details</h3>
          <div id="campaign-description">
            <h4 className="color-secondary text-md font-bold">Description</h4>
            <h4 className="color-secondary text-md">{campaignData.description}</h4>
          </div>
          <div id="campaign-dates" className="flex flex-row w-full pr-8 justify-between">
            <div>
              <h4 className="color-secondary text-md font-bold">Start Date:</h4>
              <h4 className="color-secondary text-md">{campaignData.start_date}</h4>
            </div>
            <div>
              <h4 className="color-secondary text-md font-bold">End Date:</h4>
              <h4 className="color-secondary text-md">{campaignData.end_date}</h4>
            </div>
            <div>
              <h4 className="color-secondary text-md font-bold">Budget:</h4>
              <h4 className="color-secondary text-md">{campaignData.budget_amount}</h4>
            </div>
          </div>
          <div id="campaign-images ">
            <h4 className="color-secondary text-md font-bold">Campaign Images:</h4>
            <div className="flex flex-col w-full space-y-6 py-6 justify-between space-x-10 lg:justify-between xl:flex-row lg:space-y-0">
            {campaignData.image.map((element, index) => {
              return(
                <img className="rounded-2xl h-48" src={element} alt="no-img" key={index}></img>
                )
              })}
            </div>
          </div>
          <div id="campaign-dates" className="flex flex-row w-full justify-between pr-10">
            <div>
              <h4 className="color-secondary text-md font-bold">Product:</h4>
              <h4 className="color-secondary text-md">{campaignData.start_date}</h4>
            </div>
            <div>
              <h4 className="color-secondary text-md font-bold">Languages:</h4>
              <h4 className="color-secondary text-md">{campaignData.language}</h4>
            </div>
            <div>
              <h4 className="color-secondary text-md font-bold">Channels:</h4>
              <h4 className="color-secondary text-md">{campaignData.channels}</h4>
            </div>
          </div>
          <div id="product-details" className="space-y-2">
            <h4 className="color-secondary text-md font-bold">Target Audience Categories:</h4>
            <div className="space-x-2">
              {campaignData.audience_categories.map((element,index) => {
                return (
                  <div class="badge badge-primary h-8">{element}</div>
                )
              })}
            </div>
          </div>
        </div>

        <div id="campaign-details" className="flex flex-col justify-start items-start bg-contentcard rounded-2xl w-full py-8 px-10 space-y-6 shadow-md ">
          <div className="flex flex-col space-y-2 items-center space-x-2 lg:flex-row ">
            <h3 className="color-secondary text-xl font-bold align-middle " >Inflowencers Hired</h3>
            <InflowencerPopupSearch inflowencersArray={inflowencersArray}/>
            <div class="dropdown">
              <label tabindex="0" class="btn btn-sm btn-primary">Filter</label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a href="#/">Highest Rating</a></li>
                <li><a href="#/">Post Count</a></li>
              </ul>
            </div>
            <div className="flex flex-row items-center space-x-2">
              <input type="text" placeholder="Type here" className="input input-bordered h-8 input-primary flex-grow max-w-md" />
              <button className="btn btn-sm btn-primary">Category</button>
            </div>
          </div>  
          <div className="flex flex-wrap w-full">
            {campaignData.influencers.map((element,index) => {
              return(
                <Avatar data={avatarArray[element]} id={element} key={index} sendOffer={false}/>
              )
            })}
          </div>
        </div>
        
      
        <div className="flex justify-end w-full">
            <button onClick={clickHandler} className="btn btn-primary">Edit Campaign</button>
          </div>

          </div>) : ''}
      </div>
  )
}

export default ManageCampaigns;