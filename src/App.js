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

import { useState, useEffect, useMemo } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../src/hooks/useLocale/useLocale";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import Sidenav from "examples/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";
import themeDarkRTL from "assets/theme-dark/theme-rtl";

// RTL plugins
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

// Material Dashboard 2 React routes
import SidebarRoutes from "./routes";
// Material Dashboard 2 React contexts
import { useMaterialUIController, setMiniSidenav, setOpenConfigurator } from "context";

// Images
import brandWhite from "assets/images/logo-ct.png";
import brandDark from "assets/images/logo-ct-dark.png";
import Signin from "layouts/authentication/sign-in";
import ChangePassword from "layouts/authentication/changePassword";
import ForgotPassword from "layouts/authentication/reset-password/cover";
import OTP from "layouts/authentication/reset-password/cover/otp";
import ResetPassword from "layouts/authentication/reset-password/cover/password";
import AddOrganization from "layouts/organizations/AddOrganization";
import AddDepartment from "layouts/department/AddDepartment";
import AddEmployees from "layouts/employees/AddEmployees";
import AddPartnerForm from "layouts/partners/AddPartner";
import ViewRequestPage from "layouts/requests/ViewRequestDetail";
import EmployeeContractForm from "layouts/EmployeeContract/AddEmployeesContract";
import ViewEmployeeContract from "layouts/employeeContractApproval/ViewDetail";
import LeaveRequestApproval from "layouts/LeaveRequestApproval/ViewDetail";

import AddLeaveRequest from "layouts/LeaveRequest/addLeaveRequest";
import AddProjectForm from "layouts/project/AddProjectForm";
import ProjectApprovalRequest from "layouts/projectApproval/ViewDetail";
import AddTimeSheetForm from "layouts/timeSheet/addTimeSheetForm";
import TimeSheetApprovalRequest from "layouts/timeSheetApproval/ViewDetail";

import { LanguageProvider } from "../src/context/languageContext";
export default function App() {
  const [controller, dispatch] = useMaterialUIController();
  const { t } = useTranslation();
  const routes = SidebarRoutes();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const { pathname } = useLocation();

  // Cache for the rtl
  useMemo(() => {
    const cacheRtl = createCache({
      key: "rtl",
      stylisPlugins: [rtlPlugin],
    });

    setRtlCache(cacheRtl);
  }, []);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return direction === "rtl" ? (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>
        <CacheProvider value={rtlCache}>
          <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
            <CssBaseline />
            {layout === "dashboard" && (
              <>
                <Sidenav
                  color={sidenavColor}
                  brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                  brandName={t("Qiwa Portal")}
                  routes={routes}
                  onMouseEnter={handleOnMouseEnter}
                  onMouseLeave={handleOnMouseLeave}
                />
                <Configurator />
                {configsButton}
              </>
            )}
            {layout === "vr" && <Configurator />}
            <Routes>
              {getRoutes(routes)}

              <Route path="/sign-in" element={<Signin />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/change-password" element={<ChangePassword />} />

              <Route path="/otp" element={<OTP />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path={"/add-organization"} element={<AddOrganization />} />
              <Route path={"/edit-organization/:id"} element={<AddOrganization />} />
              <Route path="/add-department" element={<AddDepartment />} />
              <Route path="/edit-department/:id" element={<AddDepartment />} />
              <Route path="/edit-employee/:id" element={<AddEmployees />} />
              <Route path="/add-partner" element={<AddPartnerForm />} />
              <Route path="/edit-partner/:id" element={<AddPartnerForm />} />
              <Route path="/view-requests" element={<ViewRequestPage />} />
              <Route path="/add-employees" element={<AddEmployees />} />
              <Route path="/add-employee-contract" element={<EmployeeContractForm />} />
              <Route path="/edit-employee-contract/:id" element={<EmployeeContractForm />} />
              <Route path="/view-employee-contract/:id" element={<ViewEmployeeContract />} />
              <Route path="/add-leave-request" element={<AddLeaveRequest />} />
              <Route path="/edit-leave-request/1" element={<AddLeaveRequest />} />
              <Route path="/view-leave-request/:id" element={<LeaveRequestApproval />} />
              <Route path="/add-project" element={<AddProjectForm />} />
              <Route path="/edit-project/:id" element={<AddProjectForm />} />
              <Route path="/add-time-sheet" element={<AddTimeSheetForm />} />
              <Route path="/edit-time-sheet/:id" element={<AddTimeSheetForm />} />
              <Route path="/project-approval-request" element={<ProjectApprovalRequest />} />
              <Route path="/time-sheet-approval-request" element={<TimeSheetApprovalRequest />} />

              <Route path="*" element={<Navigate to="/sign-in" />} />
            </Routes>
          </ThemeProvider>
        </CacheProvider>
      </I18nextProvider>
    </LanguageProvider>
  ) : (
    <LanguageProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={darkMode ? themeDark : theme}>
          <CssBaseline />
          {layout === "dashboard" && (
            <>
              <Sidenav
                color={sidenavColor}
                brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
                brandName={t("Qiwa Portal")}
                routes={routes}
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
              />
              <Configurator />
              {configsButton}
            </>
          )}
          {layout === "vr" && <Configurator />}
          <Routes>
            {getRoutes(routes)}

            <Route path="/sign-in" element={<Signin />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />

            <Route path="/otp" element={<OTP />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path={"/add-organization"} element={<AddOrganization />} />
            <Route path={"/edit-organization/:id"} element={<AddOrganization />} />
            <Route path="/add-department" element={<AddDepartment />} />
            <Route path="/edit-department/:id" element={<AddDepartment />} />
            <Route path="/edit-employee/:id" element={<AddEmployees />} />
            <Route path="/add-partner" element={<AddPartnerForm />} />
            <Route path="/edit-partner/:id" element={<AddPartnerForm />} />
            <Route path="/view-requests" element={<ViewRequestPage />} />
            <Route path="/add-employees" element={<AddEmployees />} />
            <Route path="/add-employee-contract" element={<EmployeeContractForm />} />
            <Route path="/edit-employee-contract/:id" element={<EmployeeContractForm />} />
            <Route path="/view-employee-contract/:id" element={<ViewEmployeeContract />} />
            <Route path="/add-leave-request" element={<AddLeaveRequest />} />
            <Route path="/edit-leave-request/1" element={<AddLeaveRequest />} />
            <Route path="/view-leave-request/:id" element={<LeaveRequestApproval />} />
            <Route path="/edit-project/:id" element={<AddProjectForm />} />
            <Route path="/add-project" element={<AddProjectForm />} />
            <Route path="/project-approval-request" element={<ProjectApprovalRequest />} />
            <Route path="/add-time-sheet" element={<AddTimeSheetForm />} />
            <Route path="/edit-time-sheet/:id" element={<AddTimeSheetForm />} />
            <Route path="/time-sheet-approval-request" element={<TimeSheetApprovalRequest />} />

            <Route path="*" element={<Navigate to="/sign-in" />} />

            {/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
          </Routes>
        </ThemeProvider>
      </I18nextProvider>
    </LanguageProvider>
  );
}
