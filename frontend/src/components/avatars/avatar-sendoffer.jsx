import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OfferConfirmation from "../avatar_confirmation_offer";
import AvatarSendOfferConfirmation from "../avatar_sendoffer_confirmation";
import AvatarSendOfferForm from "../avatar_sendoffer_form";

const AvatarSendOffer = (props) => {
    
    // const[offerSent, sendOffer] = useState(false);
    const sendOffer = props.sendOffer;
    const offerSent = props.offerSent
    console.log(' look here ', props.setOfferConfirmationPopup)
  
    return (
        <>
        {offerSent ? (
            <>
                <AvatarSendOfferConfirmation /> 

            </>) : 
                <AvatarSendOfferForm 
                    setOfferConfirmationPopup={props.setOfferConfirmationPopup} 
                    sendOffer={sendOffer}/>
        }
        </>
    )
}

export default AvatarSendOffer;