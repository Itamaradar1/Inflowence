import { useSelector } from "react-redux";
import { companyData } from "../data/companyData";
import StatsBar from "./stats";
import StatsBarCompany from "./stats_company";


const ProfileCards = (props) => {
    // global state
    const selector = reduxState => reduxState.UserDataReducer;
    const globalState = useSelector(selector)


    // data
    // const companyData = globalState.userData.company_profile;
    // removing for demo ----------------------------
    // const userData = globalState.userData;

    const userData = companyData;


    // console.log('userdata in profile', userData.company_profile.name)

    // "id": 2,
    //     "name": "abc",
    //     "avatar": null,
    //     "rating": null,
    //     "country": "BL",
    //     "company_category": 2,
    //     "size": 2,
    //     "influencer_experience": null,
    //     "description": "aaaaaaaaaaaaaa",
    //     "date_created": "2022-04-26",
    //     "language": "",
    //     "user": 29,
    //     "influencers": [],
    //     "liked_by": [],
    //     "campaigns": [

    return (
        <>
        {userData ? (
        <div className="flex flex-col w-full space-y-6 pb-10">
            
            <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg px-10 py-6 space-y-6 rounded-box place-items-left ">
                <h1 className="flex justify-center font-black pb-4 ">Profile info</h1>
                <div className="grid grid-cols-2 gap-6 ">
                    <p className="border-b">User name: {userData.username}</p>
                    <p className="border-b">First name: {userData.first_name}</p>
                    <p className="border-b">Last name: {userData.last_name}</p>
                    <p className="border-b">Email: {userData.email}</p>
                    {/* <p className="border-b">Company: {userData.company_profile.name}</p> */}
                </div>
                <div className="flex w-full justify-end">
                    <button className="btn btn-primary btn-md">EDIT</button>
                </div>
            </div>


            <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg px-10 py-6 space-y-6 rounded-box place-items-left ">
                <h1 className="flex justify-center font-black pb-4 ">Company Data</h1>
                <div className="grid grid-cols-2 gap-6 ">
                    <div>
                        <p className="font-bold text-lg">Company Name:</p>
                        <p className="text-md">{userData.name}</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Location:</p>
                        <p className="text-md">{userData.location}</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Description:</p>
                        <p className="text-md">{userData.description}</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Inflow-Rating:</p>
                        <p className="text-md">{userData.rating}</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Target Audience:</p>
                        <p className="text-md">{userData.rating}</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Marketing Budget:</p>
                        <p className="text-md">{userData.rating}</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Previous Experience with Influencers:</p>
                        <p className="text-md">Worked with 5-10 influencers in the past</p>

                    </div>
                    <div>
                        <p className="font-bold text-lg">Size:</p>
                        <p className="text-md">small: 50-100 employees</p>

                    </div>
                  
                </div>
                <div className="flex w-full justify-end">
                    <button className="btn btn-primary btn-md">EDIT</button>
                </div>
            </div>
            
            
            <div className="flex flex-col w-4/4 card bg-contentcard shadow-lg px-10 py-6 space-y-6 rounded-box place-items-left">
                <h1 className="flex justify-center font-black p-2 ">Campaigns</h1>
                <div className="grid grid-cols-2 gap-2 p-2 ">
                
                <div className="flex flex-row space-x-4">
                    <p className="border-b  flex items-end">Total campaigns:</p>
                    <h2 className="border-b font-bold text-xl flex items-end">3</h2>
                </div>
                <div className="flex flex-row space-x-4">
                    <p className="border-b  flex items-end">Total Monthly Expenses:</p>
                    <h2 className="border-b font-bold text-xl flex items-end">USD 10,000</h2>
                </div>
                <div className="flex flex-row space-x-4">
                    <p className="border-b  flex items-end">Total Inflowencers Hired:</p>
                    <h2 className="border-b font-bold text-xl flex items-end">32</h2>
                </div>
                <div className="flex flex-row space-x-4">
                    <p className="border-b  flex items-end">Currently Active Inflowencers:</p>
                    <h2 className="border-b font-bold text-xl flex items-end">10</h2>
                </div>
                <div className="flex flex-row space-x-4">
                    <p className="border-b  flex items-end">Total Posts:</p>
                    <h2 className="border-b font-bold text-xl flex items-end">132</h2>
                </div>

                
                </div>
            </div> 


            <StatsBarCompany className="mb-[20px]"/>


            </div>) : ' '}             
        </>    
    );
}

export default ProfileCards;
