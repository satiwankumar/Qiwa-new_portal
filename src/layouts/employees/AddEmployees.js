import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Card, Grid, MenuItem } from "@mui/material";
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDTypography from "components/MDTypography";
import Select from "react-select";
import { useLocation } from "react-router-dom";
import { statuses } from "utils/common";
import { companyNames } from "utils/common";
import { managers } from "utils/common";
import { departments } from "utils/common";
import { coaches } from "utils/common";
import { dummyPositions } from "utils/common";
import { useTranslation } from "react-i18next";

function EmployeeForm() {
  const location = useLocation();
  const { t } = useTranslation();
  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("edit-employee")) {
      setMode("edit");
    } else if (location.pathname.includes("add-employees")) {
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
                  {mode === "edit" ? t("Edit Employee") : t("Add Employee")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Name */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("employeeName", {
                        required: "Employee Name is required",
                        maxLength: {
                          value: 20,
                          message: "Maximum length is 20 characters",
                        },
                      })}
                      label={t("Employee Name*")}
                      fullWidth
                    />
                    {errors.employeeName && (
                      <p className="error-message">{errors.employeeName.message}</p>
                    )}
                  </MDBox>

                  {/* Position */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Position*")} options={dummyPositions} />

                    {errors.position && (
                      <p className="error-message">{t("Position is required")}</p>
                    )}
                  </MDBox>

                  {/* Work Mobile */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("workMobile", {
                        required: "Mobile is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a valid phone number with only numbers.",
                        },
                      })}
                      label={t("Work Mobile")}
                      fullWidth
                    />
                    {errors.workMobile && (
                      <p className="error-message">{errors.workMobile.message}</p>
                    )}
                  </MDBox>

                  {/* Work Phone */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("workPhone", {
                        required: "phone is required",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a valid phone number with only numbers.",
                        },
                      })}
                      label={t("Work Phone")}
                      fullWidth
                    />
                    {errors.workPhone && (
                      <p className="error-message">{errors.workPhone.message}</p>
                    )}
                  </MDBox>

                  {/* Work Email */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("workEmail", {
                        required: "Valid email is required",
                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      label={t("Work Email*")}
                      fullWidth
                    />
                    {errors.workEmail && (
                      <p className="error-message">{errors.workEmail.message}</p>
                    )}
                  </MDBox>

                  {/* Company */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Company*")} options={companyNames} />
                  </MDBox>

                  {/* Department */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Department*")} options={departments} />
                  </MDBox>

                  {/* Manager */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Manager*")} options={managers} />
                  </MDBox>

                  {/* Coach */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Coaches*")} options={coaches} />
                  </MDBox>

                  {mode === "edit" && (
                    <MDBox>
                      {/* <Switch checked={active} onChange={() => setActive(!active)} /> */}
                      <Select placeholder={t("Select Status")} options={statuses} />
                    </MDBox>
                  )}

                  <MDBox mt={2} display="flex" justifyContent="center">
                    <MDButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      style={{ minWidth: "250px", marginRight: "4px" }}
                    >
                      {mode === "edit" ? t("Edit Employee") : t("Add Employee")}
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

export default EmployeeForm;
