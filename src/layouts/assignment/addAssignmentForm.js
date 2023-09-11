import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Card, Checkbox, Grid, InputLabel, TextareaAutosize } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { dummyEmployeeNames } from "utils/common";
import { dummyRoles } from "utils/common";

function AddAssignmentForm() {
  const location = useLocation();
  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    if (location.pathname.includes("edit-assignment")) {
      setMode("edit");
    } else if (location.pathname.includes("add-assignment")) {
      setMode("add");
    }
  }, [location]);
  const {
    control,
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
                  {mode === "edit" ? t("Edit Assignment") : t("Add Assignment")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Id */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Employee Name*")}</InputLabel>
                    <Controller
                      name="employee_name"
                      control={control}
                      defaultValue={""}
                      rules={{ required: t("Employee is required") }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder={t("Select Employee Name")}
                          options={dummyEmployeeNames}
                        />
                      )}
                    />
                    {errors.employee_name && (
                      <p className="error-message">{errors.employee_name.message}</p>
                    )}
                  </MDBox>
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Employee Role*")}</InputLabel>
                    <Controller
                      name="employee_role"
                      control={control}
                      defaultValue={""}
                      rules={{ required: t("Employee Role is required") }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder={t("Select Employee Role")}
                          options={dummyRoles}
                        />
                      )}
                    />
                    {errors.employee_role && (
                      <p className="error-message">{errors.employee_role.message}</p>
                    )}
                  </MDBox>

                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Privilege Name*")}</InputLabel>
                    <MDInput
                      {...register("privilegeName", { required: t("Privilege Name is required") })}
                      fullWidth
                    />
                    {errors.privilegeName && (
                      <p className="error-message">{errors.privilegeName.message}</p>
                    )}
                  </MDBox>

                  {/* Start Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Read*")}</InputLabel>
                    <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
                  </MDBox>

                  {/* End Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Write*")}</InputLabel>
                    <Checkbox defaultChecked sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }} />
                  </MDBox>

                  {/* Action */}
                  <MDBox mt={2}>
                    <MDBox mt={2} display="flex" justifyContent="center">
                      <MDButton
                        variant="gradient"
                        color="info"
                        type="submit"
                        style={{ minWidth: "250px", marginRight: "4px" }}
                      >
                        {mode === "edit" ? t("Edit Assignment") : t("Add Assignment")}
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

export default AddAssignmentForm;
