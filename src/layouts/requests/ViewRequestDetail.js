import React from "react";
import { Button, Card, Grid, Icon, TextareaAutosize, Tooltip, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard"; // Import the ProfileInfoCard component
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "react-router-dom";
import Select from "react-select";
import { statuses } from "utils/common";
import MDButton from "components/MDButton";
import { useTranslation } from "react-i18next";

const action = {
  route: "/edit-profile", // Replace with the actual route
  tooltip: "Edit Profile",
};
function ViewRequestPage() {
  const { t } = useTranslation();
  const requestInfo = {
    [t("Employee Id")]: "EMP123",
    [t("Employee Name")]: "John Doe",
    [t("Position")]: "Software Engineer",
    [t("Work Email")]: "john.doe@example.com",
    [t("Company")]: "Example Corp",
    [t("Department")]: "Engineering",
    [t("Manager")]: "Jane Smith",
  };

  // Helper function to wrap keys in 't'

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
                  {t("View Requests")}
                </MDTypography>
              </MDBox>
              <MDBox px={6} py={6} display="flex" flexWrap="wrap">
                {Object.entries(requestInfo).map(([key, value]) => (
                  <MDBox key={key} flexBasis="33.33%" px={3} py={2}>
                    <MDTypography variant="subtitle1">
                      <strong>{key}:</strong> {value}
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>
              <MDBox px={6} py={3} display="flex" flexDirection="column">
                <MDBox mb={2}>
                  <Typography variant="h6" gutterBottom>
                    {t("Action*")}
                  </Typography>
                  <Select placeholder={t("Select Action")} options={statuses} />
                </MDBox>

                <MDBox mb={2}>
                  <Typography variant="h6" gutterBottom>
                    {t("Remarks*")}
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
                      {"Submit"}
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      type="reset"
                      style={{ minWidth: "250px" }}
                    >
                      {"Reset"}
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

export default ViewRequestPage;
