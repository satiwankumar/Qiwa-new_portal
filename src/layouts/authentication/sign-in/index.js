import React, { useState } from "react";
import { useForm } from "react-hook-form";
// react-router-dom components
import { Link, Navigate, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useTranslation } from "react-i18next";

function Basic() {
  const { t } = useTranslation();
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  // const handleRedirect = () => <Navigate to="/dashboard" />;

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  console.log("errors", errors, email, password);
  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <form onSubmit={handleSubmit(onSubmit)}>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox mb={2}>
              <MDInput
                {...register("email", { required: true })}
                type="email"
                label="Email*"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </MDBox>
            {errors.email && <p className="error-message">{"Email is required"}</p>}

            <MDBox mb={2}>
              <MDInput
                type="password"
                name="password"
                label="Password*"
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                {...register("password", {
                  required: true,
                })}
              />
              {errors.password && <p className="error-message">{"Password is required"}</p>}
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                {t("sign in")}
              </MDButton>
            </MDBox>

            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Forgot your password?{" "}
                <MDTypography
                  component={Link}
                  to="/forgot-password"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Forgot password
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </form>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
