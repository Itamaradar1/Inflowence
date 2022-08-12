import { Link } from "react-router-dom";
import plus from "../../assets/svg/plus-sign.svg"

const CompanySidebar = (props) => {
    
    const campaigns = props.campaigns;
    const setCurrentPage = props.setCurrentPage;
    // console.log('campaigns in sidebar', campaigns)

    const clickHandler = (e) => {
      // console.log('clicked')
      // console.log(e.target.name);
      setCurrentPage(e.target.name)
    }
    
    return (

      <aside className="w-full flex flex-col" aria-label="Sidebar">
        <div className="overflow-y-auto rounded-4 py-8 pl-4 pr-6 mt-8 ml-4 rounded-2xl bg-white shadow-md">
          <h1 className="text-black font-bold ml-4 mb-6 text-xl">Your Campaigns</h1>
          <ul name='Manage Campaigns' onClick={clickHandler} className="space-y-2">
            {campaigns.map((element,index) => {
              return(
                <li name='Manage Campaigns' key={index}> 
                  <button name='Manage Campaigns' className="flex items-center p-2 w-full text-left text-black font-normal text-accent rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-gray-700">
                    <Link name='Manage Campaigns' to={`/company/campaign/${index}/`} className="text-secondary ml-3 w-full">{element.name}</Link>
                  </button>
                </li>
              )
            })}
            <li>
              <button name='Start a new campaign' onClick={clickHandler} className="flex items-center p-2 w-full text-left text-base font-normal text-accent rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-gray-700">
                  <img name='Start a new campaign' src={plus} alt="instagram" className="pt-1 w-5 h-5 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-700"></img>
                  <Link name='Start a new campaign' className="text-secondary font-bold ml-2 text-lg" to='/company/campaign/createnew/'>Create New</Link>
                </button>
            </li>
          </ul>
        </div>
      </aside>

    );
};

export default CompanySidebar;