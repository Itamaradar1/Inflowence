import { useState } from "react";

const CreatePost = (props) => {

    const currentInflowencers = props.currentInflowencers;
    // const [newPostData, setNewPostData] = useState()

    const newPostData = {postData:
        {description:"This is the third post", 
        channels: "Twitch, Youtube",
        content: "This campaign will revolutionize the world", 
        post_date:"11/12/2022",
        assigned_to: "Gabriel Medina"}
    };
    
    
    const clickHandler = () => {
        console.log(props.plannedPosts);
        const newState = {...props.plannedPosts, newPostData};
        console.log(newState);
        props.setPlannedPosts(newState);
    }
    
    return(
        <div>
        {/* The button to open modal */}
        <label htmlFor="create-post-modal" className="btn modal-button">Create New Post</label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="create-post-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box space-y-4">
            <h3 className="font-bold text-lg">Create New Post</h3>
            <div>
                <h4>Description</h4>
                <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
            </div>
            <div>
                <h4>Channels</h4>
                <textarea className="textarea textarea-primary w-full" placeholder="Bio"></textarea>
            </div>
            <div>
                <h4>Content</h4>
                <input type="file" name="campaignimg" id="cmapignimg" multiple></input>
            </div>
            <div>
                <h4>Post Date</h4>
                <input type="text" placeholder="Type here" className="input w-full max-w-xs"></input>
            </div>
            <div>
                <h4>Assign to:</h4>
                <select class="select select-bordered select-md w-full max-w-xs">
                    {currentInflowencers.map((element,index) => {
                        return(
                            <option key={index}>{element.name}</option>
                        )
                    })}
                </select>
            </div>
            <div className="modal-action">
              <label onClick={clickHandler} htmlFor="create-post-modal" className="btn">Save Post</label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CreatePost;