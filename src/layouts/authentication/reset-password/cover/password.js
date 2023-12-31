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
import Card from "@mui/material/Card";

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
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/sign-in");
  };
  console.log("errors", errors);
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
            Create Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Enter the password here
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={2}>
              <MDInput
                {...register("newpassword", {
                  required: true,
                })}
                type="password"
                label="New Password"
                variant="standard"
                fullWidth
              />
              {errors.newpassword && <p className="error-message">{"New Password is required"}</p>}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                {...register("confirmPassword", {
                  required: true,
                })}
                label="Confirm Password"
                variant="standard"
                fullWidth
              />
              {errors.confirmPassword && (
                <p className="error-message">{"Confirm Password is required"}</p>
              )}
            </MDBox>

            <MDBox mt={6} mb={1}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <MDButton variant="gradient" color="info" type="submit" fullWidth>
                    Submit
                  </MDButton>
                </Grid>
                <Grid item xs={6}>
                  <MDButton variant="gradient" color="error" fullWidth>
                    Cancel
                  </MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </form>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default ResetPassword;
