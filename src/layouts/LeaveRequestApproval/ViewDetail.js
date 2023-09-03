import React from "react";
import { Button, Card, Grid, TextareaAutosize, Tooltip, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard"; // Import the ProfileInfoCard component
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "react-router-dom";
import { statuses } from "utils/common";
import Select from "react-select";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import MDButton from "components/MDButton";

const leaveRequestInfo = {
  "Employee Name": "John Doe",
  "Start Date": "2023-01-01",
  "End Date": "2023-12-31",
  "Manager Name": "John Walker",
  "Leave Type": "Sick Leave",
  "Leave Reason": "Feeling Ill",

  // Add any other fields you need
};

const action = {
  route: "/edit-profile", // Replace with the actual route
  tooltip: "Edit Profile",
};

function LeaveRequestApproval() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    // Success("Organization Added Successfully");
    Swal.fire({
      icon: "success",
      title: "success",
      text: `${"Oragnization Added Successfully"}`,
      showConfirmButton: false,
      timer: 3000,
    });
    // Here you can perform further actions like sending the data to an API
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
                  Leave Request Approval
                </MDTypography>
              </MDBox>
              <MDBox px={6} py={6} display="flex" flexWrap="wrap">
                {Object.entries(leaveRequestInfo).map(([key, value]) => (
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
                    Action*
                  </Typography>
                  <Select placeholder="Select Status" options={statuses} />
                </MDBox>

                <MDBox mb={2}>
                  <Typography variant="h6" gutterBottom>
                    Remarks*
                  </Typography>
                  <TextareaAutosize
                    // {...register("remarks", { required: true })}
                    rowsMin={4}
                    placeholder="Enter your  Remarks here..."
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
                      Submit
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      type="reset"
                      style={{ minWidth: "250px" }}
                    >
                      Reset
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

export default LeaveRequestApproval;
