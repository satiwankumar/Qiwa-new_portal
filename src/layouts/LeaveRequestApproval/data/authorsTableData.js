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
import { IconButton, Tooltip } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useTranslation } from "react-i18next";
export default function data() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return {
    columns: [
      {
        Header: t("Employee Name"), // Translate "Employee Name"
        accessor: "employeeName",
        align: "left",
      },
      {
        Header: t("Start Date"), // Translate "Start Date"
        accessor: "startDate",
        align: "left",
      },
      {
        Header: t("End Date"), // Translate "End Date"
        accessor: "endDate",
        align: "left",
      },
      {
        Header: t("Manager Name"), // Translate "Manager Name"
        accessor: "managerName",
        align: "left",
      },
      {
        Header: t("Leave Type"), // Translate "Leave Type"
        accessor: "leaveType",
        align: "left",
      },
      {
        Header: t("Action"), // Translate "Action"
        accessor: "action",
        align: "left",
      },
    ],

    rows: [
      {
        employeeName: "Employee1",
        startDate: "2023-08-31",
        endDate: "2024-08-31",
        managerName: "Manager1",
        leaveType: "Sick leave", // Display the selected manager's label
        // Display the selected manager's label

        // Display the selected manager's label
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/view-leave-request/1");
                }}
              >
                <Tooltip title={"View Icon"} placement="top">
                  <VisibilityIcon />
                </Tooltip>
              </IconButton>
            </MDBox>
          </>
        ),
      },
      // Add more rows here...
    ],
  };
}
