const API_URL = process.env.REACT_APP_CRA_API_URL;
export async function getCustomerRequests() {
  let url = `${API_URL}/displayCustomerReq`;
  return fetch(url).then((response) => response.json());
}
