import React from "react";
import Icon from "@mui/material/Icon";
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Department from "layouts/department";
import Organization from "layouts/organizations";
import Employees from "layouts/employees";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import Requests from "layouts/requests";
import EmployeeContract from "layouts/EmployeeContract";
import EmployeeContractApproval from "layouts/employeeContractApproval";
import Partners from "layouts/partners";
import PartnerApproval from "layouts/PartnerApproval";
import ChangePassword from "layouts/authentication/changePassword";
import LeaveRequest from "layouts/LeaveRequest";
import LeaveRequestApproval from "layouts/LeaveRequestApproval";
import { useTranslation } from "react-i18next";
import Projects from "layouts/project";
import ProjectApproval from "layouts/projectApproval";
import TimeSheet from "layouts/timeSheet";
import TimeSheetApproval from "layouts/timeSheetApproval";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

const SidebarRoutes = () => {
  const { t } = useTranslation();
  const routes = [
    {
      type: "collapse",
      name: t("Dashboard"),
      key: "dashboard",
      icon: <Icon fontSize="small">dashboard</Icon>,
      route: "/dashboard",
      component: <Dashboard />,
    },
    {
      type: "collapse",
      name: t("Organizations"),
      key: "organizations",
      icon: <Icon fontSize="small">business</Icon>,
      route: "/organizations",
      component: <Organization />,
    },
    {
      type: "collapse",
      name: t("Departments"),
      key: "departments",
      icon: <Icon fontSize="small">apartment</Icon>,
      route: "/departments",
      component: <Department />,
    },
    {
      type: "collapse",
      name: t("Partners onBoarding"),
      key: "partners-onBoarding",
      icon: <Icon fontSize="small">business</Icon>,
      route: "/partners-onBoarding",
      component: <Partners />,
    },
    {
      type: "collapse",
      name: t("Partner Approval"),
      key: "partner-approval",
      icon: <Icon fontSize="small">business</Icon>,
      route: "/partner-approval",
      component: <PartnerApproval />,
    },
    {
      type: "collapse",
      name: t("Employee OnBoarding"),
      key: "employees-onboarding",
      icon: <Icon fontSize="small">group</Icon>,
      route: "/employees-onboarding",
      component: <Employees />,
    },
    {
      type: "collapse",
      name: t("Employee Approval"),
      key: "emoloyee-approval",
      icon: <Icon fontSize="small">group</Icon>,
      route: "/emoloyee-approval",
      component: <Requests />,
    },
    {
      type: "collapse",
      name: t("Employee Contract"),
      key: "employee-contract",
      icon: <Icon fontSize="small">person</Icon>,
      route: "/employee-contract",
      component: <EmployeeContract />,
    },
    {
      type: "collapse",
      name: t("Employee Contract Approval"),
      key: "employee-contract-approval",
      icon: <Icon fontSize="small">person</Icon>,
      route: "/employee-contract-approval",
      component: <EmployeeContractApproval />,
    },
    {
      type: "collapse",
      name: t("Leave Request"),
      key: "leave-requests",
      icon: <Icon fontSize="small">event</Icon>,
      route: "/leave-requests",
      component: <LeaveRequest />,
    },
    {
      type: "collapse",
      name: t("Leave Request Approval"),
      key: "leave-requests-approval",
      icon: <Icon fontSize="small">event</Icon>,
      route: "/leave-requests-approval",
      component: <LeaveRequestApproval />,
    },

    {
      type: "collapse",
      name: t("Projects"),
      key: "projects",
      icon: <Icon fontSize="small">Web</Icon>,
      route: "/projects",
      component: <Projects />,
    },
    {
      type: "collapse",
      name: t("Project Approval"),
      key: "project-approval",
      icon: <Icon fontSize="small">A</Icon>,
      route: "/project-approval",
      component: <ProjectApproval />,
    },
    {
      type: "collapse",
      name: t("Time Sheet"),
      key: "time-sheet",
      icon: <Icon fontSize="small">A</Icon>,
      route: "/time-sheet",
      component: <TimeSheet />,
    },
    {
      type: "collapse",
      name: t("Time Sheet Approval"),
      key: "time-sheet-approval",
      icon: <Icon fontSize="small">A</Icon>,
      route: "/time-sheet-approval",
      component: <TimeSheetApproval />,
    },
    {
      type: "collapse",
      name: t("Change password"),
      key: "change-password",
      icon: <Icon fontSize="small">vpn_key</Icon>,
      route: "/change-password",
      component: <ChangePassword />,
    },
  ];

  return routes;
};

export default SidebarRoutes;
