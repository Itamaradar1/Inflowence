import { useEffect, useState } from "react";
import { avatarArray } from "../../data/avatarData";
import { baseurl } from "../../store/baseurl";
import AvatarSendOffer from "../avatars/avatar-sendoffer";
import InflowencerSendOffer from "../companies/inflowencers_sendoffer";

const Avatar = (props) => {
    
  
    // removing for demo ----------------- 
    // const [data,setData] = useState(false);
    const [offerSent, sendOffer] = useState(false)
  

    const data = props.data

    // removing for demo ----------------- 
    // useEffect(() => {
    //   const url = `${baseurl}influencers/${props.id}/`;
    //   const method = "GET";
    //   const headers = new Headers({'Authorization':`Bearer ${localStorage.getItem('token')}`});
    
    //   const config = {method,headers};
    //   fetch(url,config)
    //       .then(response => response.json())
    //       .then(data => {
    //           if(data){
    //             setData(data)
    //           };
    //       });

    // },[])


    return (
      <div className="dropdown w-32 p-4">

      {data ? (
      <div>
      <label tabIndex={0}>
        <div className="avatar avatar-offline cursor-pointer">
            <div className="rounded-full ring ring- ring-offset-base-100 ring-offset-2">
            <img src={data.avatar} alt="noimg"/>
            </div>
        </div>
      </label>

      <div tabIndex={0} className="dropdown-content card card-compact w-96 p-2 shadow-lg bg-white border-2 border-primary text-secondary-content">
        <div className="card-body">
          <h3 className="font-bold">{data.username}</h3>
          <p>{data.description}</p>
          {props.sendOffer ? <AvatarSendOffer setOfferConfirmationPopup={props.setOfferConfirmationPopup} sendOffer={sendOffer} offerSent={offerSent}/> : ''}
        </div>
      </div>
      </div>
      ) : ''}
      </div>
    );
  };

export default Avatar;