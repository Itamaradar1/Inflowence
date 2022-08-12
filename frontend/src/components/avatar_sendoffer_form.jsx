import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { campaignsArray } from "../data/campaignData";
import OfferConfirmation from "./avatar_confirmation_offer";

const AvatarSendOfferForm = (props) => {
    
    const [offerSent, setOfferSent] = useState(false)
    const selector = reduxState => reduxState.OrderConfirmationReducer;
    const globalState = useSelector(selector)
    const dispatch = useDispatch();

    const clickHandler = () => {
        props.sendOffer(true);
        dispatch({type:'confirmOrder', payload:''})
    }

    const campaigns = campaignsArray;

    return (
        <>
        <div>
              <h2 className="font-bold">Choose Campaign</h2>
              <select className="select select-bordered select-md w-full max-w-xs">
                {campaigns.map((element, index) => {
                  return(
                    <option key={index}>{element.name}</option>
                  )
                })}
              </select>
            </div>
            <div>
              <h2 className="font-bold">Choose Compensation Method</h2>
              <select className="select select-bordered select-md w-full max-w-xs">
                <option>per post</option>
                <option>per hour</option>
              </select>
            </div>
            <div>
              <h2 className="font-bold">Compensation Offer</h2>
              <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <button onClick={clickHandler} className="btn btn-md btn-primary">Send Offer</button>
        </>
    )
}

export default AvatarSendOfferForm;