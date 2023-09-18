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
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { fetchDepartments } from "utils/api";
import { useState } from "react";

export default function data() {

  const navigate = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState({
    columns: [
      {
        Header: t("Department Name"), 
        accessor: "deptNameEn",
        align: "left",
      },
      {
        Header: t("Description"), 
        accessor: "description",
        align: "left",
      },
    
      {
        Header: t("Actions"), 
        accessor: "action",
        align: "left",
      },
    ],
    rows: [
      
    ],
  });

  useEffect(() => {
    fetchDepartments()
      .then((departmentList) => {
        setData({
          ...data,
          rows: departmentList, 
        });
      })
      .catch((error) => {
        console.error("Error fetching departments:", error);
      });
  }, []); 

  return data;
}