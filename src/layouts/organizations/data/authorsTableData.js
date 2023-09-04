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
import { Icon, IconButton, Tooltip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { useTranslation } from "react-i18next";

export default function data() {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: t("Address"), accessor: "address", align: "left" },
      { Header: t("Tax ID"), accessor: "taxId", align: "left" },
      { Header: t("Company ID"), accessor: "companyId", align: "left" },
      { Header: t("Currency"), accessor: "currency", align: "left" },
      { Header: t("Phone"), accessor: "phone", align: "left" },
      { Header: t("Mobile"), accessor: "mobile", align: "left" },
      { Header: t("Email"), accessor: "email", align: "left" },
      { Header: t("Website"), accessor: "website", align: "left" },
      { Header: t("Parent Company"), accessor: "parentCompany", align: "left" },
      { Header: t("Company Favicon"), accessor: "companyFavicon", align: "left" },
      { Header: t("Actions"), accessor: "action", align: "left" },
    ],

    rows: [
      {
        address: "123 Main St, City",
        taxId: "12345-67890",
        companyId: "COMP-123",
        currency: "USD",
        phone: "123-456-7890",
        mobile: "987-654-3210",
        email: "info@example.com",
        website: "www.example.com",
        parentCompany: "Parent Corp",
        companyFavicon: <img src="favicon.png" alt="Company Favicon" />,
        action: (
          <>
            <MDTypography component={Link} to={""} variant="body2" color="secondary"></MDTypography>
            <MDBox>
              <IconButton
                color="primary"
                size="small"
                onClick={() => {
                  navigate("/edit-organization/1");
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
