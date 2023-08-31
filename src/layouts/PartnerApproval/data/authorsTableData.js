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
export default function data() {
  const navigate = useNavigate();
  return {
    columns: [
      { Header: "Employee ID", accessor: "employeeId", align: "left" },
      { Header: "Employee Name", accessor: "employeeName", align: "left" },
      { Header: "Position", accessor: "position", align: "left" },
      { Header: "Work Email", accessor: "workEmail", align: "left" },
      { Header: "Company", accessor: "company", align: "left" },
      { Header: "Department", accessor: "department", align: "left" },
      { Header: "Manager", accessor: "manager", align: "left" },
      { Header: "Actions", accessor: "action", align: "left" },
    ],

    rows: [
      {
        employeeId: "E12345",
        employeeName: "John Doe",
        position: "Software Engineer",
        workMobile: "987-654-3210",
        workPhone: "123-456-7890",
        workEmail: "john.doe@example.com",
        company: "ABC Corp",
        department: "Engineering",
        manager: "Jane Smith",
        coach: "Michael Johnson",
        action: (
          <MDBox>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                navigate("/view-requests");
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </MDBox>
        ),
      },
      {
        employeeId: "E67890",
        employeeName: "Jane Smith",
        position: "Marketing Specialist",
        workMobile: "555-123-4567",
        workPhone: "555-987-6543",
        workEmail: "jane.smith@example.com",
        company: "XYZ Ltd",
        department: "Marketing",
        manager: "Alex Brown",
        coach: "Sarah Williams",
        action: (
          <MDBox>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                navigate("/view-requests");
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
