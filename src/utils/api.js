import axios from "axios";
import store from "../store";
// import { LOGOUT } from "../endpoints/types";

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

const requestBody = {
  header: {
    transactionId: "3223213",
    requestDateTime: "3434234234",
  },
  body: {},
};

export const fetchOrganizations = async () => {
  try {
    const response = await api.post("/getOrganizations", requestBody);

    // Extract organizationList from the response
    const organizationList = response.data.body.organizationList;

    // Map the organizationList to create the dropdown options
    const dropdownOptions = organizationList.map((org) => ({
      value: org.id,
      label: org.orgNameEn,
    }));

    return dropdownOptions;
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return [];
  }
};

const requestDepartmentBody = {
  header: {
    transactionId: "3223213",
    requestDateTime: "3434234234",
  },
  body: {
    department: {
      organization: {
        id: "1",
      },
    },
  },
};

export const fetchDepartments = async () => {
  try {
    const response = await api.post("/getDepartments", requestDepartmentBody);

    // Extract organizationList from the response
    const departmentList = response.data.body.departmentList;
    return departmentList;
  } catch (error) {
    console.error("Error fetching organizations:", error);
    return [];
  }
};
export default api;
