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
import EditIcon from "@mui/icons-material/Edit";

export default function data() {
  const navigate = useNavigate();

  return {
    columns: [
      { Header: "Department Name", accessor: "departmentName", align: "left" },
      { Header: "Manager", accessor: "manager", align: "left" },
      { Header: "Parent Department", accessor: "parentDepartment", align: "left" },
      { Header: "Company", accessor: "company", align: "left" },
      { Header: "Actions", accessor: "action", align: "left" },
    ],

    rows: [
      {
        departmentName: "Sales",
        manager: "John Doe",
        parentDepartment: "Business Development",
        company: "ABC Corp",

        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-department/1");
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

      // Add more rows here...
    ],
  };
}
