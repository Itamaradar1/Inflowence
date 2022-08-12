import { baseurl } from "../baseurl";

export const fetchUserData = (dispatch, getSate, setCampaignData) => {
  const url = `${baseurl}users/me/`;
  const method = "GET";
  const headers = new Headers({'Authorization':`Bearer ${localStorage.getItem('token')}`});

  const config = {method,headers};
  fetch(url,config)
      .then(response => response.json())
      .then(data => {
          if(data){
            //   dispatch({type: 'saveUserData', payload:data})
            setCampaignData(data)
          };
      });
}

