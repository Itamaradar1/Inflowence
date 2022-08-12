const AvatarGroup = () => {
      return (
  
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-12">
              <img src="https://api.lorem.space/image/face?hash=4818" alt="avatar"/>
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://api.lorem.space/image/face?hash=40311" alt="avatar"/>
            </div>
          </div>
          <div className="avatar">
            <div className="w-12">
              <img src="https://api.lorem.space/image/face?hash=84348" alt="avatar"/>
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus text-neutral-content" alt="avatar">
              <span>+99</span>
            </div>
          </div>
        </div>
      );
};

export default AvatarGroup;