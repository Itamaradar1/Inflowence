import { avatarArray } from "../../data/avatarData";
import Avatar from "../avatars/avatar";

const YourInflowencers = (props) => {

    const yourInflowencerArray = [1,2,3,5,15,14,12,11,10]
    

    return(
        <>
        <div className="flex flex-col items-center w-full">

            <div id="campaign-header" className="flex flex-row justify-center items-center w-full mb-10">
                <div className="h-1 flex-grow bg-primary"></div>  
                    <h1 className="color-secondary text-4xl font-bold mx-10">Your Inflowencers</h1>
                <div className="h-1 flex-grow bg-primary"></div>  
            </div>

            <div id="inflowencer-filters" className="flex flex-col justify-center items-center space-x-6 space-y-4 w-full lg:space-y-0 lg:flex-row">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-sm btn-primary">Filter</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#/">Highest Rating</a></li>
                        <li><a href="#/">Post Count</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-sm btn-primary">Filter Campaign</label>
                    <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href="#/">Pegasus Release</a></li>
                        <li><a href="#/">Nike x Tesla Collab</a></li>
                    </ul>
                </div>
                <div className="flex flex-col lg:flex-row items-center w-1/2 space-y-2 space-x-2 lg:space-y-0">
                    <input type="text" placeholder="Type here" className="input input-bordered h-8 input-primary flex-grow max-w-md" />
                    <button className="btn btn-sm btn-primary">Filter Category</button>
                </div>
            </div>  

            <div id="inflowencers" className="flex flex-row flex-wrap w-1/2 mt-6 justify-center lg:w-3/4">
            {yourInflowencerArray.map((element,index) => {
                return(
                <Avatar data={avatarArray[element]} setRequest={props.setRequest} key={index}/>
                )
            })}
            </div>

        </div>
        </>
    )
}

export default YourInflowencers;