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
import { Checkbox, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { pink } from "@mui/material/colors";
import { useState } from "react";

export default function data() {
  const [readChecked, setReadChecked] = useState(false);
  const [writeChecked, setWriteChecked] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();
  return {
    columns: [
      { Header: t("Employee Name"), accessor: "employeeName", align: "left" },
      { Header: t("Employee Role"), accessor: "role", align: "left" },
      { Header: t("Privilege Name"), accessor: "privilegeName", align: "left" },

      {
        Header: t("Read"),
        accessor: "read",
        align: "left",
      },

      {
        Header: t("Write"),
        accessor: "write",
        align: "left",
      },
      { Header: t("Actions"), accessor: "action", align: "left" },
    ],

    rows: [
      {
        employeeName: "John",
        role: "UI Designer",
        privilegeName: "ABC Name",
        read: (
          <>
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </>
        ),
        write: (
          <>
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </>
        ),
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-assignment/1");
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
      {
        employeeName: "Smith",
        role: "UX Designer",
        privilegeName: "ABC Name",
        read: (
          <>
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </>
        ),
        write: (
          <>
            <Checkbox
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          </>
        ),
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-assignment/1");
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

      // Ad more rows here...
    ],
  };
}
