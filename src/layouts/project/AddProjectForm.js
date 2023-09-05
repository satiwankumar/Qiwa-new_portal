import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Grid, InputLabel } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { statuses } from "utils/common";
import { Languages } from "utils/common";

function AddProjectForm() {
  const location = useLocation();
  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("edit-project")) {
      setMode("edit");
    } else if (location.pathname.includes("add-project")) {
      setMode("add");
    }
  }, [location]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions like sending the data to an API
  };

  const handleReset = () => {
    reset();
  };

  const columns = [
    { Header: "Project Name", accessor: "projectName", align: "left" },
    { Header: "Start Date", accessor: "startDate", align: "left" },
    { Header: "Hours", accessor: "hours", align: "left" },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
              >
                <MDTypography variant="h6" color="white">
                  {mode === "edit" ? "Edit Project" : "Add Project"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="dateStarted">
                      Project Name*
                    </InputLabel>
                    <MDInput
                      {...register("projectName", {
                        required: "Project Name field is required",
                        maxLength: {
                          value: 50,
                          message: "Maximum length is 50 characters",
                        },
                      })}
                      type="text"
                      fullWidth
                    />
                  </MDBox>
                  {errors.projectName && (
                    <p className="error-message">{errors.projectName.message}</p>
                  )}
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="dateStarted">
                      Start Date*
                    </InputLabel>
                    <MDInput
                      {...register("startDate", {
                        required: "Start Date field is required",
                        max: {
                          value: new Date().toISOString().split("T")[0], 
                          message: "Please select a date before today",
                        },
                      })}
                      type="date"
                      fullWidth
                    />
                    {errors.startDate && (
                      <p className="error-message">{errors.startDate.message}</p>
                    )}
                  </MDBox>
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="dateStarted">
                      Hours*
                    </InputLabel>
                    <MDInput
                      {...register("hours", { required: "Hours field is required" })}
                      type="text"
                      fullWidth
                    />
                    {errors.hours && <p className="error-message">{errors.hours.message}</p>}
                  </MDBox>
                  <MDBox mt={2} display="flex" justifyContent="center">
                    <MDButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      style={{ minWidth: "250px", marginRight: "4px" }}
                    >
                      {mode === "edit" ? "Edit Project" : "Add Project"}
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      type="button"
                      onClick={handleReset}
                      style={{ minWidth: "250px" }}
                    >
                      Reset
                    </MDButton>
                  </MDBox>
                </form>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default AddProjectForm;
