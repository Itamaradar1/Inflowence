//set initial state
const initialState = {
  token: "",
  email:"",
  username: "",
  isInfluencer: null,
  isCompany: null,
  companyProfile: {

  },
  influencerProfile : {
      id: "",
      campaigns: [],
      country: "",
      avatar: null,
      age: 0,
      gender: 0,
      price: 0,
      currency: 0,
      charging_method: "",
      payement_method: "",
      channels: "",
      description: "",
      language: "",
      date_created: "",
      user: {},
  },
  user: {
    userName:"nai.propulsion",
    firstName:"Nai",
    lastName:"Propulsion",
    avatar:"",
    socialMedia:['instagram', 'facebook', 'youtube', 'twich', 'twitter'],
    campaigns:[" Nike ", " Adidas ", " Burger King "],
    age:24,
    country:"Switzerland",
    categories:[" sport ", " food ", " pc "],
    gender:"male",
    pricing:"100-chf per post",
    language:[" english ", " german ", " french "],
  },
  googleObject: {},
} 

//2. Create reducer
export const ReducerUserAuth = (state=initialState, action) => {
  let newState = {...state};
  switch(action.type){
      case "setToken":
          newState.token = action.payload;
          return newState;
      case "setEmail":
          newState.email = action.payload;
          return newState;     
      case "setGoogleObject":
          newState.googleObject = action.payload;
          console.log("Set google object");
          return newState;  
      default:
          return newState;
  }
}

export const ReducerSetInfluencerAndCompany = (state=initialState, action) => {
    let newState = {...state};
    switch(action.type){
        case "setIsInfluencer":
            newState.isInfluencer = true;
            return newState;  
        case "setInfluencerProfile":
            newState.influencerProfile = {...action.payload};
            return newState;  
        case "setisCompany":
            newState.isCompany = true;
            return newState;  
        case "setCompanyProfile":
            newState.companyProfile = {...action.payload};
            return newState;
        default:
            return newState;
    }
  }
