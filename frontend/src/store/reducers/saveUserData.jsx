const initialState = {
    userData: {},
    userCampaigns : {}
  } 
  
  //2. Create reducer
  const UserDataReducer = (state=initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case "saveUserData":
            newState.userData = action.payload;
            newState.userCampaigns = action.payload.company_profile.campaigns;
            return newState;
        default:
            return newState;
    }
  }
  
  export default UserDataReducer;
  