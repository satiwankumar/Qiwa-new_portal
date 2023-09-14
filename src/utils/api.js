import axios from "axios";
import store from "../store";
// import { LOGOUT } from "../endpoints/types";
const apiToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY5NDYyNDM1NywiZXhwIjoxNjk0NzEwNzU3fQ.1QkX0GS07wPSHIoxeF7itYcYaxTp0IsoiVQnD5qO-xM";

const api = axios.create({
  // baseURL: 'http://dev74.onlinetestingserver.com:5000/api',
  baseURL: "http://localhost:8081/api/v1/",

  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, PATCH, OPTIONS",
  },
});
/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response.status === 401) {
//       store.dispatch({ type: LOGOUT });
//     }
//     return Promise.reject(err);
//   }
// );

export default api;
