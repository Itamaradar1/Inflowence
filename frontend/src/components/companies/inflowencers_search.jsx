import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { avatarArray } from "../../data/avatarData";
import { baseurl } from "../../store/baseurl";
import Avatar from "../avatars/avatar";
import OfferConfirmation from "../avatar_confirmation_offer";




const SearchInflowencers = (props) => { 

    // removing for demo -------------------
    // const [influencerIDs, setInfluencerIDs] = useState([{id:1},{id:2}])

    // removing for demo -------------------
    // useEffect(() => {
    //     const url = `${baseurl}influencers/all/`;
    //     const method = "GET";
    //     const headers = new Headers({'Authorization':`Bearer ${localStorage.getItem('token')}`});
      
    //     const config = {method,headers};
    //     fetch(url,config)
    //         .then(response => response.json())
    //         .then(data => {
    //             if(data){
    //                 setInfluencerIDs(data)
    //             };
    //         });
    // }, [])


    // global state
   const selector = reduxState => reduxState.OrderConfirmationReducer;
   const globalState = useSelector(selector)


    const influencerIDs = avatarArray;
    const [offerConfirmationPopup, setOfferConfirmationPopup] = useState(false)

    return(
        <>
        <div className="flex flex-col items-center w-full">

            <div id="campaign-header" className="flex flex-row justify-center items-center w-full mb-10">
                <div className="h-1 flex-grow bg-primary"></div>  
                    {/* {globalState.orderConfirmation === true ? <OfferConfirmation setOfferConfirmationPopup={setOfferConfirmationPopup}/> : ''} */}
                    <h1 className="color-secondary text-4xl font-bold mx-10">Search Inflowencers</h1>
                <div className="h-1 flex-grow bg-primary"></div>  
            </div>

            <div id="inflowencer-filters" className="flex flex-col justify-center items-center space-x-6 space-y-4 w-full lg:space-y-0 lg:flex-row">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-sm btn-primary">Filter</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#/">Highest Rating</a></li>
                        <li><a href="#/">Post Count</a></li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row items-center w-1/2 space-y-2 space-x-2 lg:space-y-0">
                    <input type="text" placeholder="Type here" className="input input-bordered h-8 input-primary flex-grow max-w-md" />
                    <button className="btn btn-sm btn-primary ">Filter Category</button>
                </div>
            </div>  

            {influencerIDs ? (
            <div id="inflowencers" className="flex flex-row flex-wrap w-1/2 mt-6 justify-center lg:w-3/4">
            {influencerIDs.map((element,index) => {
                return(
                // altering for demo ----------------------------    
                <Avatar 
                    setOfferConfirmationPopup={props.setOfferConfirmationPopup} 
                    data={element} 
                    setRequest={props.setRequest} 
                    id={element.id} 
                    key={index} 
                    sendOffer={true}/>
                )
            })}
            </div>
            ) : ''}   

        </div>
        </>
    )
}

export default SearchInflowencers;