import SearchInflowencers from "./inflowencers_search";

const InflowencerSendOffer = (props) => {

    console.log('renderredddd')

    return(
        <div>
        {/* The button to open modal */}
        <label htmlFor="send-offer-modal" className="btn btn-sm modal-button btn-primary">Send Offer Now</label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="send-offer-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box space-y-4">
            <div className="modal-action">
              <div>Hey</div>
              <label htmlFor="send-offer-modal" className="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default InflowencerSendOffer;