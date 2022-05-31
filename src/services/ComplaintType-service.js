const API_URL = process.env.REACT_APP_CRA_API_URL;


export async function getTypeOfComps()
  {
      console.log(API_URL);
    return fetch(API_URL).then((response) => response.json());
  }
  
  export async function getRequestTypeOfComps()
  {
      console.log(API_URL);
    return fetch(API_URL).then((response) => response.json());
  }