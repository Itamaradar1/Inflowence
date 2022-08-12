import React from "react";
import instagram from '../../assets/svg/instagram_gif.gif';
import facebook from '../../assets/svg/facebook_color.svg';
import twitter from '../../assets/svg/twitter_gif.gif';
import youtube from '../../assets/svg/youtube.svg';
import twitch from '../../assets/svg/twitch.gif';
import tiktok from '../../assets/svg/tiktok.gif';
import profile from "../../assets/images/profile.jpeg"

const AddAccount = (props) => {
  return (
    <div className="bg-contentcard rounded-box p-6 overflow-hidden shadow-lg mx-7 mb-10">
      <div className="text-center p-1 border-b">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
          <img src={profile} alt="Randy Robertson" />
          </div>
        </label>
          <p className="pt-2 text-lg font-semibold">
          Nai propulsion
          </p>
      </div>
    <div className="border-b">
      {/* First list item */}
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex"> 
        <div className="flex items-center p-2 text-base font-normal rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-veryLightGrey ">
                <img src={instagram} alt="instagram"  name="instagram" className="w-6 h-6 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-100 mr-2">
                </img></div>
        <div className="pl-3">
          <p className="text-sm font-semibold">
          Nai propulsion
          </p>
          <p className="text-xs text-gray-600">
          Nai.propulsion@email.com
          </p>
        </div>
      </a>
      
      {/* Second list item */}
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex"> 
        <div className="flex items-center p-2 text-base font-normal rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-veryLightGrey ">
                <img src={facebook} alt="instagram"  name="instagram" className="w-6 h-6 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-100 mr-2">
                </img></div>
        <div className="pl-3">
          <p className="text-sm font-semibold">
          Nai propulsion
          </p>
          <p className="text-xs text-gray-600">
          Nai.propulsion@email.com
          </p>
        </div>
      </a>
      {/* Third list item */}
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex"> 
        <div className="flex items-center p-2 text-base font-normal rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-veryLightGrey ">
                <img src={twitter} alt="instagram"  name="instagram" className="w-6 h-6 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-100 mr-2">
                </img></div>
        <div className="pl-3">
          <p className="text-sm font-semibold">
          Nai propulsion
          </p>
          <p className="text-xs text-gray-600">
          Nai.propulsion@email.com
          </p>
        </div>
      </a>
      {/* Fourth list item */}
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex"> 
        <div className="flex items-center p-2 text-base font-normal rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-veryLightGrey ">
                <img src={youtube} alt="instagram"  name="instagram" className="w-6 h-6 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-100 mr-2">
                </img></div>
        <div className="pl-3">
          <p className="text-sm font-semibold">
          Nai propulsion
          </p>
          <p className="text-xs text-gray-600">
          Nai.propulsion@email.com
          </p>
        </div>
      </a>
{/* Fifth list item */}
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex"> 
        <div className="flex items-center p-2 text-base font-normal rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-veryLightGrey ">
                <img src={twitch} alt="instagram"  name="instagram" className="w-6 h-6 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-100 mr-2">
                </img></div>
        <div className="pl-3">
          <p className="text-sm font-semibold">
          Nai propulsion
          </p>
          <p className="text-xs text-gray-600">
          Nai.propulsion@email.com
          </p>
        </div>
      </a>
{/* Sixst list item */}
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex"> 
        <div className="flex items-center p-2 text-base font-normal rounded-lg dark:text-accent hover:bg-veryLightGrey dark:hover:bg-veryLightGrey ">
                <img src={tiktok} alt="instagram"  name="instagram" className="w-6 h-6 text-accent transition duration-75 dark:text-accent group-hover:text-accent dark:group-hover:text-gray-100 mr-2">
                </img></div>
        <div className="pl-3">
          <p className="text-sm font-semibold">
          Nai propulsion
          </p>
          <p className="text-xs text-gray-600">
          Nai.propulsion@email.com
          </p>
        </div>
      </a>
      <a href="#/" className="px-6 py-3 hover:bg-veryLightGrey flex">
        <div className="w-8 h-8 rounded-full text-center align-middle text-lg">
          <img className="w-6 h-6 rounded-full mx-auto" src="https://img.icons8.com/windows/50/000000/add-user-male.png" alt="profile pic"/>
        </div>
        <div className="pl-3">
          <p className="text-sm font-semibold text-gray-700">
            Add another account
          </p>
        </div>
      </a>
    </div>
    <div className="border-b">
      {/* First list item */}
      <div className="px-6 py-4 text-center">
        <button className="btn btn-primary">
          Sign out of all accounts
        </button>
      </div>
    </div>
  </div>

  );
}

export default AddAccount;