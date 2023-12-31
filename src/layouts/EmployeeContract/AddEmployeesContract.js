import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { Card, Grid, InputLabel, MenuItem } from "@mui/material";
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
import { dummyEmployeeNames } from "utils/common";
import { Currencies } from "utils/common";
import { useTranslation } from "react-i18next";
import { useMaterialUIController } from "context";
import CustomDatePicker from "customComponents/datePicker";
import arLocale from "date-fns/locale/ar-SA"; // Import the Arabic locale
import enLocale from "date-fns/locale/en-US";
import PropTypes from "prop-types";

function EmployeeContractForm() {
  const location = useLocation();
  const today = new Date().toISOString().split("T")[0];
  const { t } = useTranslation();
  const [controller, dispatch] = useMaterialUIController();
  const { direction } = controller;

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    if (location.pathname.includes("edit-employee-contract")) {
      setMode("edit");
    } else if (location.pathname.includes("add-employees-contract")) {
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
  console.log("directionPArent", direction);

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
                  {mode === "edit" ? t("Edit Employee Contract") : t("Add Employee Contract")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Id */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Employee")} options={dummyEmployeeNames} />
                  </MDBox>

                  <MDBox mb={2}>
                    <MDInput
                      {...register("contractName", {
                        required: "Contract Name is required",
                        maxLength: {
                          value: 20,
                          message: "Maximum length 20 characters",
                        },
                      })}
                      label={t("Contract Name*")}
                      fullWidth
                    />
                    {errors.contractName && (
                      <p className="error-message">{errors.contractName.message}</p>
                    )}
                  </MDBox>

                  {/* Start Date */}
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

                  {/* End Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="endDate">
                      {t("End Date*")}
                    </InputLabel>
                    {/* <MDInput {...register("endDate", { required: true })} type="date" fullWidth /> */}
                    <CustomDatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      direction={direction == "rtl" ? "ar-SA" : "en-US"}
                    />
                    {errors.endDate && <p className="error-message">{t("End Date is required")}</p>}
                  </MDBox>

                  {/* Salary */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("salary", { required: "Salary is required" })}
                      label="Salary*"
                      fullWidth
                    />
                    {errors.salary && <p className="error-message">{t("Salary is required")}</p>}
                  </MDBox>

                  {/* Currency */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Currency")} options={Currencies} />

                    {/* <MDInput
                      {...register("currency", { required: true })}
                      label="Currency*"
                      fullWidth
                    /> */}
                    {errors.currency && (
                      <p className="error-message">{t("Currency is required")}</p>
                    )}
                  </MDBox>
                  {mode === "edit" && (
                    <MDBox>
                      {/* <Switch checked={active} onChange={() => setActive(!active)} /> */}
                      <Select placeholder={t("Select Status")} options={statuses} />
                    </MDBox>
                  )}

                  {/* Action */}
                  <MDBox mt={2}>
                    <MDBox mt={2} display="flex" justifyContent="center">
                      <MDButton
                        variant="gradient"
                        color="info"
                        type="submit"
                        style={{ minWidth: "250px", marginRight: "4px" }}
                      >
                        {mode === "edit" ? t("Edit Contract") : t("Add Contract")}
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

export default EmployeeContractForm;
