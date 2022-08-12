import { Link } from "react-router-dom";
import plus from "../../assets/svg/plus-sign.svg"

const InfluencerCampaignsSidebar = (props) => {
    
      const campaigns = [
        {name:"Pegasus Release"}, 
        {name:"Winter Olympics 2024"}, 
        {name:"NBA Finals Campaign"}, 
        {name:"Inclusion in Sports with Nike"}, 
        {name:"Brazil Soccer Team"}, 
        {name:"Neyman Signature Shoe Release"}, 
        {name:"Nike x Tesla Collab"},]
    
    const setCurrentPage = props.setCurrentPage;
    // console.log('campaigns in sidebar', campaigns)

    const clickHandler = (e) => {
      setCurrentPage(e.target.name)
    }
    
    return (

      <aside className="flex flex-col mb-6" aria-label="Sidebar">
        <div className="overflow-y-auto rounded-4 py-8 px-3  ml-4 rounded-box bg-contentcard shadow-lg">
          <h1 className="text-black font-bold ml-4 mb-6 text-xl">Your Campaigns</h1>
          <ul name='Manage Campaigns' onClick={clickHandler} className="space-y-2">
            {campaigns.map((element,index) => {
              return(
                <li name='Manage Campaigns' key={index}> 
                  <button name='Manage Campaigns' className="flex items-center p-2 w-full text-left text-black font-normal text-accent rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-gray-700">
                    <Link name='Manage Campaigns' to='#/'className="text-secondary ml-3 w-full">{element.name}</Link>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </aside>

    );
};

export default InfluencerCampaignsSidebar;