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
import { useTranslation } from "react-i18next";
import CustomDatePicker from "customComponents/datePicker";
import { useMaterialUIController } from "context";

function AddProjectForm() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [controller, dispatch] = useMaterialUIController();
  const { direction } = controller;

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
    { Header: t("Project Name"), accessor: "projectName", align: "left" },
    { Header: t("Start Date"), accessor: "startDate", align: "left" },
    { Header: t("Hours"), accessor: "hours", align: "left" },
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
                  {mode === "edit" ? t("Edit Project") : t("Add Project")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="dateStarted">
                      {t("Project Name*")}
                    </InputLabel>
                    <MDInput
                      {...register("projectName", {
                        required: t("Project Name field is required"),
                        maxLength: {
                          value: 50,
                          message: t("Maximum length is 50 characters"),
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
                    <InputLabel shrink={true} htmlFor="startDate">
                      {t("Start Date*")}
                    </InputLabel>

                    <CustomDatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      direction={direction == "rtl" ? "ar-SA" : "en-US"}
                    />
                    {errors.startDate && (
                      <p className="error-message">{t("Start Date is required")}</p>
                    )}
                  </MDBox>
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="dateStarted">
                      {t("Hours*")}
                    </InputLabel>
                    <MDInput
                      {...register("hours", { required: t("Hours field is required") })}
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
                      {mode === "edit" ? t("Edit Project") : t("Add Project")}
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      type="button"
                      onClick={handleReset}
                      style={{ minWidth: "250px" }}
                    >
                      {t("Reset")}
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
