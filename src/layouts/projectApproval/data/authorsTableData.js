/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";
export default function data() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return {
    columns: [
      { Header: t("Project Name"), accessor: "projectName", align: "left" },
      { Header: t("Start Date"), accessor: "startDate", align: "left" },
      { Header: t("Hours"), accessor: "hours", align: "left" },
      { Header: t("Actions"), accessor: "action", align: "left" },
    ],

    rows: [
      {
        projectName: "Abc Project",
        startDate: "2023-08-22",
        hours: 7,
        action: (
          <MDBox>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                navigate("/project-approval-request");
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </MDBox>
        ),
      },
      {
        projectName: "DEF Project",
        startDate: "2023-05-28",
        hours: 10,
        action: (
          <MDBox>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                navigate("/project-approval-request");
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </MDBox>
        ),
      },
      // Add more rows here...
    ],
  };
}
