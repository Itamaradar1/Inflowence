import { Link } from "react-router-dom";
import ContentContainer from "./content_small_container";
import instagram from '../assets/svg/instagram.svg';
import facebook from '../assets/svg/facebook.svg';
import twitter from '../assets/svg/twitter.svg';
import plus from '../assets/svg/plussvg.svg'
import neymar from '../assets/images/inflowencers/neymar.jpg';
import nike from '../assets/images/nike.png';
import logo from '../assets/images/logo.png'


const CompanyProfileSidebar = (props) => {
    

    const clickHandler = () => {
      // console.log('clicked')
      // setCurrentPage('Start a new campaign')
    }
    
    return (

      <aside className="w-full flex flex-col items-center" aria-label="Sidebar">
        <div className="overflow-y-auto rounded-4 space-y-8 px-6 py-4 mt-8 ml-4 rounded-xl bg-white shadow-md">
          <img src={logo} alt="ney" className="w-36 h-36 mt-38 rounded-full overflow-hidden"/>
          <ul className="space-y-2">
            <li> 
              <button className="flex items-center p-2 w-full text-left text-black font-normal text-accent rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-gray-700">
                <span className="text-secondary ml-3 w-full">Your Profile</span>
              </button>
            </li>
            <li> 
              <button className="flex items-center p-2 w-full text-left text-black font-normal text-accent rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-gray-700">
                <span className="text-secondary ml-3 w-full">Edit Profile</span>
              </button>
            </li>
          </ul>
        </div>
      </aside>

    );
};

export default CompanyProfileSidebar;