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

// @mui material components
import React from "react";
import Card from "@mui/material/Card";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { MuiOtpInput } from "mui-one-time-password-input";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-reset-cover.jpeg";
import BasicLayout from "layouts/authentication/components/BasicLayout";

function OTP() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [otp, setOtp] = React.useState("");
  const handleChange = (newValue) => {
    setOtp(newValue);
  };
  const onSubmit = (data) => {
    console.log(data);
  };
  const watchOtp = watch("otp", () => {
    // Update the UI in response to changes to the value of the otp field.
  });
  return (
    // <CoverLayout coverHeight="50vh" image={bgImage}>
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          py={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h3" fontWeight="medium" color="white" mt={1}>
            Reset Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter the Otp you received here
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          {/* <MDBox component="form" role="form"> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={4}>
              <MuiOtpInput
                {...register("otp", {
                  required: true,
                  minLength: 4,
                  maxLength: 4,
                })}
                value={otp}
                onChange={handleChange}
                placeholder="Enter 6-digit OTP"
              />
              {/* {errors && <p className="error-message">{"OTP is required"}</p>} */}
            </MDBox>
            <MDBox mt={6} mb={1}>
              <MDBox mt={6} mb={1}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <MDButton variant="gradient" color="error" fullWidth>
                      Cancel
                    </MDButton>
                  </Grid>
                  <Grid item xs={6}>
                    <MDButton variant="gradient" color="info" type="submit" fullWidth>
                      Reset
                    </MDButton>
                  </Grid>
                </Grid>
              </MDBox>
            </MDBox>
          </form>
        </MDBox>
        {/* </MDBox> */}
      </Card>
    </BasicLayout>
  );
}

export default OTP;
