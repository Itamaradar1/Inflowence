
const Post = (props) => {

    const postData = props.postData;

    const clickHandler = () => {
        console.log('clicked')
    }
    
    return(
        <div>
        {/* The button to open modal */}
        <label htmlFor="post-modal" className="btn modal-button btn-primary">{`Post #${props.index+1}`}</label>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="post-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box space-y-4">
            <h3 className="font-bold text-lg">{postData.name}</h3>
            <div id="description">
                <h4 className="font-bold">Description</h4>
                <h4>{postData.description}</h4>
            </div>
            <div id="channels">
                <h4 className="font-bold">Channels</h4>
                <h4>{postData.channels}</h4>
            </div>
            <div id="content">
                <h4 className="font-bold">Content</h4>
                <h4>{postData.content}</h4>
            </div>
            <div id="channels">
                <h4 className="font-bold">Post Date</h4>
                <h4>{postData.post_date}</h4>
            </div>
            <div id="channels">
                <h4 className="font-bold">Assigned to:</h4>
                <h4>{postData.assigned_to}</h4>
            </div>
            <div className="modal-action">
              <label onClick={clickHandler} htmlFor="post-modal" className="btn">Close</label>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Post;