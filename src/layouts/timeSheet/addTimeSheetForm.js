import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Card, Grid, InputLabel, TextareaAutosize } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { dummyProjectTask, dummyTimeUnit } from "utils/common";
import { useTranslation } from "react-i18next";

function AddTimeSheetForm() {
  const location = useLocation();
  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    if (location.pathname.includes("edit-time-sheet")) {
      setMode("edit");
    } else if (location.pathname.includes("add-time-sheet")) {
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
                  {mode === "edit" ? t("Edit Project") : t("Add Project")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Id */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Task / Project*")}</InputLabel>
                    <Controller
                      name="task"
                      control={control}
                      defaultValue={""}
                      rules={{ required: t("Task is required") }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder={t("Select Project Task")}
                          options={dummyProjectTask}
                        />
                      )}
                    />
                    {errors.task && <p className="error-message">{errors.task.message}</p>}
                  </MDBox>
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Time / Unit*")}</InputLabel>
                    <Controller
                      name="time_unit"
                      control={control}
                      defaultValue={""}
                      rules={{ required: t("Time Unit is required") }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          placeholder={t("Select Time Unit")}
                          options={dummyTimeUnit}
                        />
                      )}
                    />
                    {errors.time_unit && (
                      <p className="error-message">{errors.time_unit.message}</p>
                    )}
                  </MDBox>

                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Time Spent*")}</InputLabel>
                    <MDInput
                      {...register("timeSpent", { required: t("Contract Name is required") })}
                      fullWidth
                    />
                    {errors.timeSpent && (
                      <p className="error-message">{errors.timeSpent.message}</p>
                    )}
                  </MDBox>

                  {/* Start Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Date Started*")}</InputLabel>
                    <MDInput
                      {...register("dateStarted", {
                        required: t("Date Started field is required"),
                        max: {
                          value: new Date().toISOString().split("T")[0],
                          message: t("Please select a date before today"),
                        },
                      })}
                      type="date"
                      fullWidth
                    />
                    {errors.dateStarted && (
                      <p className="error-message">{errors.dateStarted.message}</p>
                    )}
                  </MDBox>

                  {/* End Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Time Started*")}</InputLabel>
                    <MDInput
                      {...register("timeStarted", {
                        required: t("Time Strated field is required"),
                      })}
                      type="time"
                      fullWidth
                    />
                    {errors.timeStarted && (
                      <p className="error-message">{errors.timeStarted.message}</p>
                    )}
                  </MDBox>

                  {/* Salary */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true}>{t("Description*")}</InputLabel>
                    <TextareaAutosize
                      {...register("description", {
                        required: t("This is required field"),
                        minLength: {
                          value: 100,
                          message: t("Minimum length is 100 characters"),
                        },
                      })}
                      rowsMin={4}
                      placeholder={t("Description")}
                      style={{
                        width: "100%",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        paddingBottom: "50px",
                        fontSize: "18px",
                      }}
                    />
                    {errors.description && (
                      <p className="error-message">{errors.description.message}</p>
                    )}
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
                        {mode === "edit" ? t("Edit Time Sheet") : t("Add Time Sheet")}
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

export default AddTimeSheetForm;
