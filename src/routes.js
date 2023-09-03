/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Department from "layouts/department";
import Organization from "layouts/organizations";

import Employees from "layouts/employees";

import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";

// @mui icons
import Icon from "@mui/material/Icon";
import Requests from "layouts/requests";
import EmployeeContract from "layouts/EmployeeContract";
import EmployeeContractApproval from "layouts/employeeContractApproval";

import Partners from "layouts/partners";
import PartnerApproval from "layouts/PartnerApproval";
import ChangePassword from "layouts/authentication/changePassword";
import LeaveRequest from "layouts/LeaveRequest";
import LeaveRequestApproval from "layouts/LeaveRequestApproval";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },

  {
    type: "collapse",
    name: "Organizations",
    key: "organizations",
    icon: <Icon fontSize="small">business</Icon>,
    route: "/organizations",
    component: <Organization />,
  },

  {
    type: "collapse",
    name: "Departments",
    key: "departments",
    icon: <Icon fontSize="small">apartment</Icon>,
    route: "/departments",
    component: <Department />,
  },

  {
    type: "collapse",
    name: "Partners onBoarding",
    key: "partnersonBoarding",
    icon: <Icon fontSize="small">business</Icon>,
    route: "/partners",
    component: <Partners />,
  },

  {
    type: "collapse",
    name: " Partner Approval",
    key: "partnerApproval",
    icon: <Icon fontSize="small">business</Icon>,
    route: "/partner-approval",
    component: <PartnerApproval />,
  },

  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <ProfileInfoCard />,
  // },
  {
    type: "collapse",
    name: "Employee OnBoarding",
    key: "employeesOnBoarding",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/employees",
    component: <Employees />,
  },
  {
    type: "collapse",
    name: " Employee Approval",
    key: "emoloyeeApproval",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/requests",
    component: <Requests />,
  },

  {
    type: "collapse",
    name: " Employee Contract",
    key: "employeeContract",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/employee-contract",
    component: <EmployeeContract />,
  },
  {
    type: "collapse",
    name: " Employee Contract Approval",
    key: "employeeContractApproval",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/employee-contract-approval",
    component: <EmployeeContractApproval />,
  },

  {
    type: "collapse",
    name: " Leave Request",
    key: "leaveRequest",
    icon: <Icon fontSize="small">event</Icon>,
    route: "/leave-requests",
    component: <LeaveRequest />,
  },
  {
    type: "collapse",
    name: " Leave Request Approval",
    key: "leaveRequestApproval",
    icon: <Icon fontSize="small">event</Icon>,
    route: "/leave-requests-approval",
    component: <LeaveRequestApproval />,
  },

  {
    type: "collapse",
    name: "Change password",
    key: "changepassword",
    icon: <Icon fontSize="small">vpn_key</Icon>,
    route: "/change-password",
    component: <ChangePassword />,
  },
];

export default routes;
