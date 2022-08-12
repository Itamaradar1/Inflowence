import SearchInflowencers from "./inflowencers_search";
import YourInflowencers from "./inflowencers_your";

const Inflowencers = (props) => {
    
    // pulling props
    const currentPage = props.currentPage;
    const setCurrentPage = props.setCurrentPage;
    const inflowencersArray = props.inflowencersArray;

    console.log('inflow array', inflowencersArray);


    return(
        <div className="flex flex-col justify-start items-center w-full h-full" >
            <div className="flex flex-col justify-start w-3/4 lg:w-1/2 h-full mt-10" >
                <div id="campaign-details" className="flex flex-col justify-start items-start bg-contentcard rounded-2xl w-full h-5/6 p-5 space-y-4 shadow-md">
                    {currentPage === 'Search Inflowencers' ? <SearchInflowencers inflowencersArray={inflowencersArray}/> : ' '}
                    {currentPage === 'Your Inflowencers' ? <YourInflowencers inflowencersArray={inflowencersArray}/> : ' '}
                </div>
            </div>
        </div>
    )
}

export default Inflowencers;