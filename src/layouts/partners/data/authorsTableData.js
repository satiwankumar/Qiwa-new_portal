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
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function data() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return {
    columns: [
      {
        Header: t("Partner Name"), // Translate "Partner Name"
        accessor: "partnerName",
        align: "left",
      },
      {
        Header: t("Address"), // Translate "Address"
        accessor: "address",
        align: "left",
      },
      {
        Header: t("Tax ID"), // Translate "Tax ID"
        accessor: "taxId",
        align: "left",
      },
      {
        Header: t("Phone"), // Translate "Phone"
        accessor: "phone",
        align: "left",
      },
      {
        Header: t("Mobile"), // Translate "Mobile"
        accessor: "mobile",
        align: "left",
      },
      {
        Header: t("Email"), // Translate "Email"
        accessor: "email",
        align: "left",
      },
      {
        Header: t("Website"), // Translate "Website"
        accessor: "website",
        align: "left",
      },
      {
        Header: t("Language"), // Translate "Language"
        accessor: "language",
        align: "left",
      },
      {
        Header: t("Tags"), // Translate "Tags"
        accessor: "tags",
        align: "left",
      },
      {
        Header: t("Actions"), // Translate "Actions"
        accessor: "action",
        align: "left",
      },
    ],

    rows: [
      {
        partnerName: "ABC Company",
        address: "123 Main St, City",
        taxId: "12345-67890",
        phone: "123-456-7890",
        mobile: "987-654-3210",
        email: "info@example.com",
        website: "www.example.com",
        language: "en",
        tags: "abc abcd ac",
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-partner/1");
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
