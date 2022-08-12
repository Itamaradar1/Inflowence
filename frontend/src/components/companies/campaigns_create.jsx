import { useState } from "react";
import { avatarArray } from "../../data/avatarData";
import Avatar from "../avatars/avatar";
import CreatePost from "../post_createnew";
import Post from "../post_post";
import InflowencerPopupSearch from "./inflowencers_popup_search";
import SearchInflowencers from "./inflowencers_search";

const CreateCampaign = () => {

    
    // data
    const currentInflowencers = [
        {name:"The Rock"},
        {name: "Gabriel Medina"},
        {name: "Kelly Slater"}
    ];
    
    const postsList = [
        {postData:
            {description:"Hello new post",
            channels: "Facebook, Instagram, Youtube",
            content: "Hey world there is this new product out!!", 
            post_date:"11/12/2023",
            assigned_to: "The Rock"}
        },
        {postData:
            {description:"This is the second post", 
            channels: "Twitch, Youtube",
            content: "This campaign will revolutionize the world", 
            post_date:"11/12/2022",
            assigned_to: "Gabriel Medina"}
        },
    ]
    
    // state
    const [plannedPosts, setPlannedPosts] = useState(postsList);
    

    return(
        <div id="campaign-page-content-container" className="flex flex-col w-3/4 justify-start items-start px-10 space-y-6 lg:w-1/2" >
          {/* Container with title and colored div */}
          <div id="campaign-header" className="flex flex-row justify-start items-center w-full">
            <input type="text" placeholder="Type campaign name here" className="input input-bordered input-lg w-full max-w-xs" />
          </div>


          {/* Content container*/}
          <div id="campaign-details" className="flex flex-col justify-start items-start bg-contentcard rounded-2xl w-full p-5 space-y-4 shadow-md">
            <h3 className="color-secondary text-xl font-bold">Campaign Details</h3>
            <div id="campaign-description" className="w-full">
              <h4 className="color-secondary text-md font-bold">Description</h4>
              <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
            </div>
            <div id="campaign-images">
              <h4 className="color-secondary text-md font-bold">Campaign Images</h4>
              <input type="file" name="campaignimg" id="cmapignimg" multiple></input>
            </div>
            <div className="w-1/2 " id="product-details">
              <h4 className="color-secondary text-md font-bold">Product Details</h4>
              <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
            </div>
          </div>

          <div id="campaign-details" className="flex flex-col justify-start items-start bg-contentcard rounded-2xl w-full p-5 space-y-6 shadow-md">
            <div className="flex flex-row justify-start items-center space-x-6 w-full">
              <h3 className="color-secondary text-xl font-bold align-middle" >Hire Inflowencers</h3>
              <InflowencerPopupSearch inflowencersArray={currentInflowencers}/>
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
            <div className="flex flex-row flex-wrap w-full  justify-center ">
              {avatarArray.map((element,index) => {
                return(
                  <Avatar data={element} key={index}/>
                )
              })}
            </div>
          </div>

          {/* Posting Details*/}
          <div id="campaign-details" className="flex flex-col justify-start items-start bg-contentcard rounded-2xl w-full p-5 space-y-4 shadow-md">
            <h3 className="color-secondary text-xl font-bold">Programmed Posts</h3>
            <div className="flex flex-row flex-wrap space-x-6">
                {postsList.map((element,index) => {
                    return(
                        <Post postData={element.postData} key={index} index={index}/>
                    )
                })}
            </div>
            <CreatePost 
                currentInflowencers={currentInflowencers} 
                plannedPosts={plannedPosts} 
                setPlannedPosts={setPlannedPosts}/>
          </div>
          
          <div className="flex justify-end w-full">
            <button className="btn btn-primary">Create Campaign</button>
          </div>


        </div>
    )
}

export default CreateCampaign;