import Footer from "../../components/footer";
import inflow1 from '../../assets/images/inflowencers/fitness_inflowencer.jpg'
import inflow2 from '../../assets/images/inflowencers/lebron_inflowencer.png'
import inflow3 from '../../assets/images/inflowencers/medina_inflowencer.jpg'
import inflow4 from '../../assets/images/inflowencers/random_inflowencer.jpg'
import inflow5 from '../../assets/images/inflowencers/random2_inflowencer.jpg'
import { useEffect, useState } from "react";
import Campaigns from "../../components/companies/campaigns";
import { current } from "tailwindcss/colors";
import Inflowencers from "../../components/companies/inflowencers";
import CompanyNavBar from "../../components/nav_bars/navbar_company";
import { useDispatch, useSelector } from "react-redux";
import CompanyProfile from "../../components/companies/profile_company";
import PostingCalendar from "../../components/companies/calendar";
import { baseurl } from "../../store/baseurl";




const CompanyPage = () => {

  // global state
  const selector = reduxState => reduxState.UserDataReducer;
  const globalState = useSelector(selector)

  // local state
  const [currentPage, setCurrentPage] = useState('Profile')
  const [campaignData, setCampaignData] = useState(false)
  const [userData, setUserData] = useState({})
  const [companyData, setCompanyData] = useState({})

  // hooks
  const dispatch = useDispatch();

  useEffect(() => {
    const url = `${baseurl}users/me/`;
    const method = "GET";
    const headers = new Headers({'Authorization':`Bearer ${localStorage.getItem('token')}`});
  
    const config = {method,headers};
    fetch(url,config)
        .then(response => response.json())
        .then(data => {
            if(data){
              setCampaignData(data.company_profile.campaigns)
              dispatch({type:'saveUserData', payload:data})
            };
        });
  
  }, [])
  
  // const userData = globalState.userData;
  // const companyData = userData.company_profile;
  // const campaignData = companyData.campaigns;
  
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



  return (
    <>
    <CompanyNavBar setCurrentPage={setCurrentPage}/>
    {campaignData ? (
    <div className="flex flex-row min-h-screen pt-6" >
        {currentPage === 'Manage Campaigns' || currentPage === 'Start a new campaign' || currentPage === 'Edit Campaign'  ? 
          <Campaigns 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            campaigns={campaignData}
          /> : ''}
        {currentPage === 'Search Inflowencers' || currentPage === 'Your Inflowencers' ? 
          <Inflowencers
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
          /> : '' }
        {currentPage === 'Profile' ? 
          <CompanyProfile
          /> : '' }
        {currentPage === 'Posting Calendar' ? 
          <PostingCalendar
            user = {user}
          /> : '' }
    </div>) : ''}
    <Footer />
  </>
  );
}

export default CompanyPage;
