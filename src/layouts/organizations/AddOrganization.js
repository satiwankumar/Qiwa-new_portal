import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Card, Grid, Switch } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDAlert from "components/MDAlert";
import Select from "react-select";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-number-input";
import { companyNames } from "utils/common";
import { Currencies } from "utils/common";
import { useTranslation } from "react-i18next";
import "./organization.css";
import "react-phone-number-input/style.css";

import { ADD_ORGANIZATION } from "endpoints/constants";
import api from "utils/api";

const styles = (theme) => ({
  field: {
    margin: "10px 0",
  },
  countryList: {
    ...theme.typography.body1,
  },
});

function OrganizationForm() {
  const location = useLocation();
  const { t } = useTranslation();

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  const [phone, setPhone] = useState("");
  useEffect(() => {
    if (location.pathname.includes("edit-organization")) {
      setMode("edit");
    } else if (location.pathname.includes("add-organization")) {
      setMode("add");
    }
  }, [location]);

  useEffect(() => {}, []);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();
  const [value, setValue] = useState();
  const handleOnChange = (value) => {
    setPhone(value);
  };
  const onSubmit = async (data) => {
    try {
      // Make the API request to add the organization
      const response = await api.post(ADD_ORGANIZATION, body);

      // Handle the success response
      if (response.status === "success") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Organization Added Successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to add organization",
        });
      }
    } catch (error) {
      console.error("API request error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the organization",
      });
    }
  };

  const alertContent = (name) => (
    <MDTypography variant="body2" color="white">
      A simple {name} alert with{" "}
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        an example link
      </MDTypography>
      . Give it a click if you like.
    </MDTypography>
  );
  const statuses = [
    { value: "active", label: "Active" },
    { value: "inactive", label: "Inactive" },
    { value: "closed", label: "Closed" },
    // Add more status options as needed
  ];

  const handleReset = () => {
    reset();
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDAlert color="primary" dismissible>
        {alertContent("primary")}
      </MDAlert>
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
                  {mode === "edit" ? t("Edit Organization") : t("Add Organization")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Tax ID */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("taxId", { required: t("Tax ID is required") })}
                      label={t("Tax ID*")}
                      fullWidth
                    />
                    {errors.taxId && <p className="error-message">{errors.taxId.message}</p>}
                  </MDBox>

                  {/* Company ID */}
                  <MDBox mb={2}>
                    <MDBox mb={2}>
                      <Select placeholder={t("Select Company")} options={companyNames} />
                    </MDBox>
                    {/* <MDInput
                      {...register("companyId", { required: true })}
                      label="Company ID*"
                      fullWidth
                    /> */}
                    {/* {errors.companyId && (
                      <p className="error-message">{"Company ID is required"}</p>
                    )} */}
                  </MDBox>

                  {/* Currency */}
                  <MDBox mb={2}>
                    <Select placeholder={t("Select Currency*")} options={Currencies} />

                    {/* {errors.currency && <p className="error-message">{"Currency is required"}</p>} */}
                  </MDBox>

                  {/* Phone */}
                  <MDBox mb={2}>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={value}
                      onChange={setValue}
                      className="number"
                      international
                    />

                    {/* <div
                      style={{ display: "flex", alignItems: "center", borders: "4 solid black" }}
                    >
                      <Select
                        sx={{
                          width: 100,
                          height: 40,
                          marginRight: 15,
                          border: "1px solid darkgrey",
                          color: "#fff",
                          "& .MuiSvgIcon-root": {
                            color: "white",
                          },
                        }}
                        placeholder={t("+92")}
                        options={phoneNumbers}
                      />
                      <MDInput
                        {...register("phone", {
                          required: t("Phone is required"),
                          pattern: {
                            value: /^[0-9]+$/,
                            message: t("Please enter a valid phone number with only numbers."),
                          },
                        })}
                        label={t("Phone*")}
                        fullWidth
                      />
                    </div>
                    {errors.phone && <p className="error-message">{errors.phone.message}</p>} */}
                  </MDBox>

                  {/* Mobile */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("mobile", {
                        required: t("Mobile is required"),
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Please enter a valid phone number with only numbers.",
                        },
                      })}
                      label="Mobile*"
                      fullWidth
                    />
                    {errors.mobile && <p className="error-message">{errors.mobile.message}</p>}
                  </MDBox>

                  {/* Email */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("email", {
                        required: t("Valid email is required"),

                        pattern: {
                          value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
                          message: "Please enter a valid email address.",
                        },
                      })}
                      label={t("Email*")}
                      fullWidth
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                  </MDBox>

                  {/* Website */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("website", { required: true })}
                      label={t("Website*")}
                      fullWidth
                    />
                    {errors.website && <p className="error-message">{t("Website is required")}</p>}
                  </MDBox>

                  {/* Parent Company */}
                  <MDBox mb={2}>
                    {/* <MDInput
                      {...register("parentCompany", { required: true })}
                      label="Parent Company*"
                      fullWidth
                    /> */}
                    <MDBox mb={2}>
                      <Select placeholder={t("Select Parent Company*")} options={companyNames} />
                    </MDBox>
                    {/* {errors.parentCompany && (
                      <p className="error-message">{"Parent Company is required"}</p>
                    )} */}
                  </MDBox>

                  {/* Company Favicon */}
                  <MDBox mb={2}>
                    <label
                      htmlFor="companyFavicon"
                      style={{
                        fontSize: "15px",
                        color: "#495057",
                      }}
                    >
                      {t("Logo")}
                    </label>
                    <br />
                    <input
                      type="file"
                      {...register("companyFavicon", { required: true })}
                      id="companyFavicon"
                      accept="image/*" // Accept image files
                    />
                    {errors.companyFavicon && (
                      <p className="error-message">{t("Company Favicon is required")}</p>
                    )}
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
                      {mode === "edit" ? t("Edit Organization") : t("Add Organization")}
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

export default OrganizationForm;
