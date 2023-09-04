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
import { IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";

export default function data() {
  const navigate = useNavigate();
  return {
    columns: [
      { Header: "Month", accessor: "month", align: "left" },
      { Header: "Resource Name", accessor: "resourceName", align: "left" },
      { Header: "Submission Date", accessor: "submissionDate", align: "left" },
      { Header: "Actions", accessor: "action", align: "left" },
    ],

    rows: [
      {
        month: 'Jan',
        resourceName: "ABC Project",
        submissionDate: "2023-08-22",
        action: (
          <>
           <MDBox>
            <IconButton
              color="primary"
              size="small"
              onClick={() => {
                navigate("/time-sheet-approval-request");
              }}
            >
              <VisibilityIcon />
            </IconButton>
          </MDBox>
          </>
        ),
      },
      // Ad more rows here...
    ],
  };
}
