import { useState } from "react";
import OfferConfirmation from "../avatar_confirmation_offer";
import SearchInflowencers from "./inflowencers_search";

const InflowencerPopupSearch = (props) => {

    return(
        <div classNmae="w-full">
        {/* The button to open modal */}
        <label htmlFor="search-inflowencer-modal" className="btn btn-sm modal-button btn-primary">Add</label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="search-inflowencer-modal" className="modal-toggle" />
        <div className="modal flex flex-col">
          <div className="modal-box w-11/12 max-w-5xl space-y-4 h-3/4">
            <SearchInflowencers inflowencersArray={props.inflowencersArray}/>
            <div className="modal-action">
              <label htmlFor="search-inflowencer-modal" className="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default InflowencerPopupSearch;