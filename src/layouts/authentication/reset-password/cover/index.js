import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";
import { Grid } from "@mui/material";
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
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    navigate("/otp");
  };
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
            Forgot Password
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            You will receive an e-mail in maximum 60 seconds
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          {/* <MDBox component="form" role="form"> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={4}>
              <MDInput
                {...register("email", { required: true })}
                type="email"
                label="Email"
                variant="standard"
                fullWidth
              />
              {errors.email && <p className="error-message">{"Email is required"}</p>}
            </MDBox>
            <MDBox mt={6} mb={1}>
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
            </MDBox>
          </form>
        </MDBox>
        {/* </MDBox> */}
      </Card>
    </BasicLayout>
  );
}

export default ForgotPassword;
