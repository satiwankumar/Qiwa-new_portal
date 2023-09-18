import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, Grid, Switch, TextareaAutosize, Typography } from "@mui/material";
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
import { statuses } from "utils/common";
import { organization } from "utils/common";

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
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [value, setValue] = useState();
  const [data, setData] = useState({
    orgNameAr: "dsdfds",
    orgNameEn: "",
    addressStreet1: "",
    addressStreet2: "",
    city: "",
    zip: "",
    state: "",
    country: "",
    taxId: "",
    companyId: "1",
    currency: "",
    phone: "",
    mobile: "",
    email: "",
    website: "",
    parentCompany: "",
    companyLogo: "abc.png",
    createdBy: "1",
    description: "",
  });

  const fillDataWithOrganization = (organization) => {
    if (organization) {
      setData({
        orgNameAr: organization.orgNameAr,
        orgNameEn: organization.orgNameEn,
        addressStreet1: organization.addressStreet1,
        addressStreet2: organization.addressStreet2,
        city: organization.city,
        zip: organization.zip,
        state: organization.state,
        country: organization.country,
        taxId: organization.taxId,
        companyId: organization.companyId,
        currency: organization.currency,
        phone: organization.phone,
        mobile: organization.mobile,
        email: organization.email,
        website: organization.website,
        parentCompany: organization.parentCompany,
        companyLogo: organization.companyLogo,
        createdBy: organization.createdBy,
        description: organization.description,
      });
    }
  };

  useEffect(() => {
    if (location.pathname.includes("edit-organization")) {
      setMode("edit");
      console.log("location?.state", location.state);
      if (location.state.organization) {
        fillDataWithOrganization(location.state?.organization);
      }
    } else if (location.pathname.includes("add-organization")) {
      setMode("add");
    }
  }, [location]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSelect = (e, name) => {
    setData({ ...data, [name]: e.value });
  };
  const onSubmit = async (data) => {
    try {
      let body = {
        header: {
          transactionId: "3223213",
          requestDateTime: "3434234234",
        },
        body: {
          organization: data,
        },
      };
      // Make the API request to add the organization
      const response = await api.post(ADD_ORGANIZATION, body);

      // Handle the success response
      if (response.status == 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Organization Added Successfully",
          showConfirmButton: false,
          timer: 3000,
        });
        navigate(`/organizations`);
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

  const alertContent = (error) => (
    <MDTypography variant="body2" color="white">
      Error
      <MDTypography component="a" href="#" variant="body2" fontWeight="medium" color="white">
        {error}
      </MDTypography>
    </MDTypography>
  );

  const handleReset = () => {
    reset();
  };

  const handlePhoneInput = (value) => {
    console.log("Phonevalue", value);
    setData({ ...data, phone: value });
  };

  console.log(data);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MDAlert color="primary" dismissible>
        {alertContent("primary")}
      </MDAlert> */}
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
                  {/* Organization  Name */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("orgNameEn", { required: t("Organization Name is required") })}
                      label={t("Organization Name*")}
                      name="orgNameEn"
                      onChange={(e) => handleChange(e)}
                      value={data.orgNameEn}
                      fullWidth
                    />
                    {errors.orgNameEn && <p className="error-message">{errors.orgName.message}</p>}
                  </MDBox>

                  {/* Tax ID */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("taxId", { required: t("Tax ID is required") })}
                      label={t("Tax ID*")}
                      name="taxId"
                      onChange={(e) => handleChange(e)}
                      value={data.taxId}
                      fullWidth
                    />
                    {errors.taxId && <p className="error-message">{errors.taxId.message}</p>}
                  </MDBox>

                  {/* Address Street 1 */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("addressStreet1", {
                        required: t("Address Street 1 is required"),
                      })}
                      label={t("Address Street 1*")}
                      name="addressStreet1"
                      value={data.addressStreet1}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.addressStreet1 && (
                      <p className="error-message">{errors.addressStreet1.message}</p>
                    )}
                  </MDBox>

                  {/* Address Street 2 */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("addressStreet2", {
                        required: t("Address Street 2 is required"),
                      })}
                      label={t("Address Street 2*")}
                      name="addressStreet2"
                      value={data.addressStreet2}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.addressStreet2 && (
                      <p className="error-message">{errors.addressStreet2.message}</p>
                    )}
                  </MDBox>

                  {/* City */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("city", { required: t("City is required") })}
                      label={t("City*")}
                      name="city"
                      value={data.city}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.city && <p className="error-message">{errors.city.message}</p>}
                  </MDBox>

                  {/* ZIP */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("zip", { required: t("ZIP is required") })}
                      label={t("ZIP*")}
                      name="zip"
                      value={data.zip}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.zip && <p className="error-message">{errors.zip.message}</p>}
                  </MDBox>

                  {/* State */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("state", { required: t("State is required") })}
                      label={t("State*")}
                      name="state"
                      value={data.state}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.state && <p className="error-message">{errors.state.message}</p>}
                  </MDBox>

                  {/* Country */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("country", { required: t("Country is required") })}
                      label={t("Country*")}
                      name="country"
                      value={data.country}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.country && <p className="error-message">{errors.country.message}</p>}
                  </MDBox>
                  {/* Company ID */}
                  <MDBox mb={2}>
                    <MDBox mb={2}>
                      <Select
                        placeholder={t("Select Company")}
                        value={data.company}
                        onChange={(e) => {
                          handleSelect(e, "company");
                        }}
                        options={companyNames}
                      />
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
                    <Select
                      placeholder={t("Select Currency*")}
                      value={data.currency}
                      onChange={(e) => {
                        handleSelect(e, "currency");
                      }}
                      options={Currencies}
                    />

                    {/* {errors.currency && <p className="error-message">{"Currency is required"}</p>} */}
                  </MDBox>

                  {/* Phone */}
                  <MDBox mb={2}>
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={data?.phone}
                      onChange={handlePhoneInput}
                      className="number"
                      international
                    />
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
                      name="mobile"
                      value={data.mobile}
                      onChange={(e) => handleChange(e)}
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
                      name="email"
                      value={data.email}
                      onChange={(e) => handleChange(e)}
                      fullWidth
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                  </MDBox>

                  {/* Website */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("website", { required: true })}
                      label={t("Website*")}
                      name="website"
                      value={data.website}
                      onChange={(e) => handleChange(e)}
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
                      <Select
                        placeholder={t("Select Parent Company*")}
                        onChange={(e) => {
                          handleSelect(e, "parentCompany");
                        }}
                        value={data.parentCompany}
                        options={companyNames}
                      />
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
                      // {...register("companyLogo", { required: true })}
                      id="companyFavicon"
                      accept="image/*" // Accept image files
                    />
                    {errors.companyFavicon && (
                      <p className="error-message">{t("Company Favicon is required")}</p>
                    )}
                  </MDBox>
                  <MDBox mb={2}>
                    <label
                      htmlFor="Description"
                      style={{
                        fontSize: "15px",
                        color: "#495057",
                      }}
                    >
                      {t("Description*")}
                    </label>
                    <TextareaAutosize
                      {...register("description", { required: true })}
                      rowsMin={4}
                      name="description"
                      value={data.description}
                      onChange={(e) => handleChange(e)}
                      placeholder={t("Enter your  Description here")}
                      style={{
                        width: "100%",
                        border: "1px solid #ccc",
                        borderRadius: "4px",
                        paddingLeft: "2px",
                        paddingBottom: "50px",

                        fontSize: "18px",
                      }}
                    />
                    {errors.description && (
                      <p className="error-message">{t("Description is required")}</p>
                    )}
                  </MDBox>

                  {mode === "edit" && (
                    <MDBox>
                      {/* <Switch checked={active} onChange={() => setActive(!active)} /> */}
                      <Select
                        placeholder={t("Select Status")}
                        value={data?.status}
                        onChange={(e) => {
                          handleSelect(e, "status");
                        }}
                        options={statuses}
                      />
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
