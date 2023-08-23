import { Link } from "react-router-dom";
// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import { useForm } from "react-hook-form";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";

function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log("errors", errors);
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Change Password
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          {/* <MDBox component="form" role="form"> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <MDBox mb={2}>
              <MDInput
                {...register("currentpassword", {
                  required: true,
                })}
                type="password"
                label="Current password*"
                variant="standard"
                name="currentpassword"
                fullWidth
              />
              {errors.currentpassword && (
                <p className="error-message">{"Current Password is required"}</p>
              )}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                {...register("newpassword", {
                  required: true,
                })}
                type="password"
                label="New Password*"
                name="newpassword"
                variant="standard"
                fullWidth
              />
              {errors.newpassword && <p className="error-message">{"New Password is required"}</p>}
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                {...register("confirmpassword", {
                  required: true,
                })}
                type="password"
                name="confirmpassword"
                label="Confirm Password*"
                variant="standard"
                fullWidth
              />
              {errors.confirmpassword && (
                <p className="error-message">{"Confirm Password is required"}</p>
              )}
            </MDBox>

            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" type="submit" color="info" fullWidth>
                Submit
              </MDButton>
            </MDBox>
          </form>
        </MDBox>
        {/* </MDBox> */}
      </Card>
    </CoverLayout>
  );
}

export default ChangePassword;
