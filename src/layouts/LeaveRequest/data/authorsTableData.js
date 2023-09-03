/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
 * =========================================================
 * Material Dashboard 2 React - v2.2.0
 * =========================================================
 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2023 Creative Tim (https://www.creative-tim.com)
 * Coded by www.creative-tim.com
 * =========================================================
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import Select from "react-select"; // Import react-select
import { useState } from "react"; // Import useState

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";

export default function LeaveData() {
  const navigate = useNavigate();

  // Sample data for employee names and managers (dropdown options)
  const employeeNames = [
    { value: "abcd", label: "abcd" },
    // Add more employee names
  ];

  const managers = [
    { value: "Manager A", label: "Manager A" },
    // Add more manager names
  ];

  // State variables for selected employee and manager
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [selectedManager, setSelectedManager] = useState(null);

  return {
    columns: [
      { Header: "Employee Name", accessor: "employeeName", align: "left" },
      { Header: "Start Date", accessor: "startDate", align: "left" },
      { Header: "End Date", accessor: "endDate", align: "left" },
      { Header: "Manager Name", accessor: "managerName", align: "left" },
      { Header: "Leave Type", accessor: "leaveType", align: "left" },
      { Header: "Action", accessor: "action", align: "left" },
    ],

    rows: [
      {
        employeeName: "Employee1",
        startDate: "2023-08-31",
        endDate: "2024-08-31",
        managerName: "Manager1",
        leaveType: "Sick Leave", // Display the selected manager's label
        // Display the selected manager's label
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-leave-request/1");
                }}
              >
                <Tooltip title={"Edit Icon"} placement="top">
                  <EditIcon />
                </Tooltip>
              </IconButton>
            </MDBox>
          </>
        ),
      },
      // You can add more contract rows here
    ],
  };
}
