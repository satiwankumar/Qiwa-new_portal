import React from "react";
import { Button, Card, Grid, TextareaAutosize, Tooltip, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard"; // Import the ProfileInfoCard component
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { statuses } from "utils/common";
import Select from "react-select";
import { useTranslation } from "react-i18next";

const action = {
  route: "/edit-profile", // Replace with the actual route
  tooltip: "Edit Profile",
};
function ViewEmployeeContract() {
  const { t } = useTranslation();
  let contractInfo = {
    [t("Employee ID")]: "EMP123",
    [t("Employee Name")]: "John Doe",
    [t("Contract Name")]: "Software Engineer",
    [t("Start Date")]: "2023-01-01",
    [t("End Date")]: "2023-12-31",
    [t("Salary")]: "$80,000",
    [t("Currency")]: "USD",
    // Add any other fields you need
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <MDTypography variant="h6" color="white">
                  {t("View Employee Contract")}
                </MDTypography>
              </MDBox>
              <MDBox px={6} py={6} display="flex" flexWrap="wrap">
                {Object.entries(contractInfo).map(([key, value]) => (
                  <MDBox key={key} flexBasis="33.33%" px={3} py={2}>
                    <MDTypography variant="subtitle1">
                      <strong>{key}:</strong> {value}
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>
              <MDBox px={6} py={3} display="flex" flexDirection="column">
                <MDBox mb={2}>
                  <MDBox mb={2}>
                    <Typography variant="h6" gutterBottom>
                      {t("Action")}
                    </Typography>
                    <Select placeholder={t("Select Action")} options={statuses} />
                  </MDBox>
                </MDBox>
                <MDBox mb={2}>
                  <Typography variant="h6" gutterBottom>
                    {t("Remarks")}
                  </Typography>
                  <TextareaAutosize
                    // {...register("remarks", { required: true })}
                    rowsMin={4}
                    placeholder={t("Enter your  Remarks here...")}
                    style={{
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      paddingBottom: "50px",

                      fontSize: "18px",
                    }}
                  />
                </MDBox>

                <MDBox mt={2}>
                  <MDBox mt={2} display="flex" justifyContent="center">
                    <MDButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      style={{ minWidth: "250px", marginRight: "4px" }}
                    >
                      {t("Submit")}
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      type="reset"
                      style={{ minWidth: "250px" }}
                    >
                      {t("Reset")}
                    </MDButton>
                  </MDBox>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ViewEmployeeContract;
