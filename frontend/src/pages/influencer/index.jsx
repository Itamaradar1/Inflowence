
import Footer from "../../components/footer";
import Sidebar from "../../components/nav_bars/side_bar";
import ProfileNavBar from "../../components/influencer/profile_nav_bar";
import InfluencerProfile from "../../components/influencer/influencer_profile";
import { useState } from "react";
import InfluencerPostsCalendar from "../../components/influencer/influencer_posts_calender";
import AddAccount from "../../components/influencer/add_account";
import InfluencerCampaigns from "../../components/influencer/influencer_campaigns";
import InfluencerCampaignsSidebar from "../../components/nav_bars/influencer_campaigns_side_bar";
import InfluencerInstaChannels from "../../components/influencer/influencer_insta_channel";
import InfluencerFacebookChannels from "../../components/influencer/influencer_facebook_channel";
import InfluencerTwitterChannels from "../../components/influencer/influencer_twitter_channel";


const InfluencerPage = (props) => {

  const [currentPage, setCurrentPage] = useState('profile')

 // temporary data
 const user = {
  id:1,
  email:"shalom@yahoo.com",
  userName:"powpow",
  firstName:"Shalom",
  lastName:"Shlomo",
  avatar:"",
  socialMedia:['instagram', 'facebook', 'youtube', 'twich', 'twitter'],
  campaigns:[" Nike ", " Adidas ", " Burger King "],
  age:24,
  country:"Switzerland",
  categories:[" sport ", " food ", " pc "],
  gender:"male",
  pricing:"100-chf per post",
  language:[" english ", " german ", " french "],
}

    return(
      <>
          <ProfileNavBar setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            <div className="flex flex-row w-full justify-center">
            {currentPage === 'Campaigns' ? <InfluencerCampaignsSidebar/> : <Sidebar setCurrentPage={setCurrentPage}/> }
              <div className="flex flex-col w-4/6 ">
              {currentPage === 'profile' ? <InfluencerProfile 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              user={user} /> : '' }
              {currentPage === 'Campaigns' ? <InfluencerCampaigns
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              user={user} /> : '' }
              {currentPage === 'Posts calendar' ? <InfluencerPostsCalendar 
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              user={user} /> : '' }
                {currentPage === 'instagram' ? <InfluencerInstaChannels 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                user={user} /> : '' }
                  {currentPage === 'facebook' ? <InfluencerFacebookChannels 
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  user={user} /> : '' }
                    {currentPage === 'twitter' ? <InfluencerTwitterChannels 
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    user={user} /> : '' }
                      {currentPage === 'youtube' ? <InfluencerInstaChannels
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      user={user} /> : '' }
                      {currentPage === 'twitch' ? <InfluencerInstaChannels
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      user={user} /> : '' }
                      {currentPage === 'tiktok' ? <InfluencerInstaChannels
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      user={user} /> : '' }
                      {currentPage === 'Add your account' ? <AddAccount
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      user={user} /> : '' }
              </div>
            </div>
          
          
                <Footer/>  
      </>
  );
}

export default InfluencerPage;