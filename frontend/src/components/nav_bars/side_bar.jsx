import { Link } from "react-router-dom";
import instagram from '../../assets/svg/instagram_gif.gif';
import facebook from '../../assets/svg/facebook_color.svg';
import twitter from '../../assets/svg/twitter_gif.gif';
import youtube from '../../assets/svg/youtube.svg';
import twitch from '../../assets/svg/twitch.gif';
import tiktok from '../../assets/svg/tiktok.gif';

const Sidebar = (props) => {
    
    // const PageContent = props.content;
    const onClickHandler = (ev) => {
      // console.log(ev.target.name);
      props.setCurrentPage(ev.target.name)
    }
    return (

      <aside className="w-[10%] shadow-lg h-full mb-6" aria-label="Sidebar">
        <div className="flex justify-center pt-8 pb-4 px-5 bg-contentcard rounded-box dark:bg-veryLightGrey">
          <ul className="space-y-6 ">
            <li>
              <button name="instagram" className="flex items-center p-2 text-lg font-semibold rounded-lg 
              dark:text-accent 
              hover:bg-veryLightGrey dark:hover:bg-veryLightGrey " onClick={onClickHandler} >
                <img src={instagram} alt="instagram"  name="instagram" className="w-6 h-6 transition duration-75 mr-2">
                </img>30,842
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-lg font-semibold rounded-lg dark:text- hover:bg-veryLightGrey dark:hover:bg-veryLightGrey" name="facebook" onClick={onClickHandler}>
                <img src={facebook} alt="facbook" className=" w-6 h-6 transition duration-75 mr-2" name="facebook"></img>15,487
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-lg font-semibold rounded-lg dark:text- hover:bg-veryLightGrey dark:hover:bg-veryLightGrey" name="twitter" onClick={onClickHandler}>
                <img src={twitter} alt="twitter" className="w-6 h-6 transition duration-75 mr-2" name="twitter"></img>23,229
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-lg font-semibold rounded-lg dark:text- hover:bg-veryLightGrey dark:hover:bg-veryLightGrey" name="youtube" onClick={onClickHandler}>
                <img src={youtube} alt="youtube" className="w-6 h-6 transition duration-75 mr-2" name="youtube"></img>10,996
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-lg font-semibold rounded-lg dark:text- hover:bg-veryLightGrey dark:hover:bg-veryLightGrey" name="twitch" onClick={onClickHandler}>
                <img src={twitch} alt="twitch" className="w-6 h-6 duration-75 mr-2" name="twitch"></img>30,731
              </button>
            </li>
            <li>
              <button className="flex items-center p-2 text-lg font-semibold rounded-lg dark:text- hover:bg-veryLightGrey dark:hover:bg-veryLightGrey mb-4" name="tiktok" onClick={onClickHandler}>
                <img src={tiktok} alt="tiktok" className="w-6 h-6 transition duration-75 mr-2" name="tiktok"></img>5,114
              </button>
            </li>
            <li className="flex justify-center ">
              <button className="flex items-center p-2 btn btn-primary " onClick={onClickHandler} name="Add your account">
                Add account
              </button>
            </li>
          
          </ul>
        </div>
      </aside>
    );
};

export default Sidebar;