import { campaignsArray } from "../../data/campaignData";
import CompanySidebar from "../nav_bars/side_bar_company";
import CreateCampaign from "./campaigns_create";
import ManageCampaigns from "./campaigns_manage";
import EditCampaign from "./campaign_edit";

const Campaigns = (props) => {

    // current state
    const currentPage = props.currentPage;
    
    // data
    const inflowencersArray = props.inflowencersArray
    // const campaigns = props.campaigns
    const campaigns = campaignsArray;
    

    return(
        <>
        <div className="w-full h-full flex flex-row justify-center items-start">
            <div id="sidebar-container" className="w-1/8 pt-14" >
                <CompanySidebar campaigns={campaigns} setCurrentPage={props.setCurrentPage}/>
            </div>
            {currentPage === 'Manage Campaigns' ? <ManageCampaigns setCurrentPage={props.setCurrentPage} inflowencersArray={inflowencersArray} campaigns={campaigns}/> : ''}
            {currentPage === 'Start a new campaign' ? <CreateCampaign /> : ''}
            {currentPage === 'Edit Campaign' ? <EditCampaign /> : ''}
        </div>
        
        </>
    )
}

export default Campaigns;