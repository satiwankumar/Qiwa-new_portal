// @mui material components
import Card from "@mui/material/Card";
import { useForm } from "react-hook-form";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
// Images
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Footer from "examples/Footer";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
function ChangePassword() {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="success"
                mx={2}
                mt={-3}
                p={3}
                mb={2}
                textAlign="center"
              >
                <MDTypography variant="h5" fontWeight="small" color="white" mt={1}>
                  {t("Change Password")}
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
                      label={t("Current password*")}
                      variant="standard"
                      name="currentpassword"
                      fullWidth
                    />
                    {errors.currentpassword && (
                      <p className="error-message">{t("Current Password is required")}</p>
                    )}
                  </MDBox>

                  <MDBox mb={2}>
                    <MDInput
                      {...register("newpassword", {
                        required: true,
                      })}
                      type="password"
                      label={t("New Password*")}
                      name="newpassword"
                      variant="standard"
                      fullWidth
                    />
                    {errors.newpassword && (
                      <p className="error-message">{t("New Password is required")}</p>
                    )}
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      {...register("confirmpassword", {
                        required: true,
                      })}
                      type="password"
                      name="confirmpassword"
                      label={t("Confirm Password*")}
                      variant="standard"
                      fullWidth
                    />
                    {errors.confirmpassword && (
                      <p className="error-message">{t("Confirm Password is required")}</p>
                    )}
                  </MDBox>

                  <MDBox mt={2}>
                    <MDBox mt={2} display="flex" justifyContent="center">
                      <MDButton
                        variant="gradient"
                        color="info"
                        type="submit"
                        onClick={() => navigate("/sign-in")}
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
                </form>
              </MDBox>
              {/* </MDBox> */}
            </Card>
            <Footer />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ChangePassword;
