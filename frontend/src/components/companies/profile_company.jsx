import ProfileCards from "../profile_cards";
import CompanyProfileSidebar from "../side_bar_profile_company";

const CompanyProfile = () => {
    
    
    return(
        <>

        <div className="w-full h-full flex flex-row justify-center items-start space-x-4 pt-10">
            <div id="sidebar-container" className="pt-4">
                <CompanyProfileSidebar />
            </div>
            <div className="w-2/3 px-10 lg:w-1/2">
                <div className="flex flex-col items-start justify-center space-y-4 pt-0" >
                    <h1 className="font-bold text-2xl">Company Profile</h1>
                    <ProfileCards />
                </div>
            </div>
            
        </div>
        
        </>
    )
}

export default CompanyProfile;