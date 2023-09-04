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
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";

export default function data() {
  const navigate = useNavigate();
  return {
    columns: [
      { Header: "Project Task", accessor: "projectTask", align: "left" },
      { Header: "Time Spent", accessor: "timeSpent", align: "left" },
      { Header: "Time Unit", accessor: "timeUnit", align: "left" },
      { Header: "Date Started", accessor: "dateStarted", align: "left" },
      { Header: "Time Started", accessor: "timeStarted", align: "left" },
      { Header: "Work Description", accessor: "workDescription", align: "left" },
      { Header: "Actions", accessor: "action", align: "left" },
    ],

    rows: [
      {
        projectTask: "ABC Project",
        timeSpent: "10 hours",
        timeUnit: "10",
        dateStarted: "2023-08-22",
        timeStarted: "4:50:00",
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-time-sheet/1");
                }}
              >
                <Tooltip title={"Edit Icon"} placement="top">
                  <EditIcon />
                </Tooltip>
              </IconButton>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/add-time-sheet/1");
                }}
              >
                <Tooltip title={"Delete Icon"} placement="top">
                  <DeleteIcon />
                </Tooltip>
              </IconButton>
            </MDBox>
          </>
        ),
      },
      // Ad more rows here...
    ],
  };
}
