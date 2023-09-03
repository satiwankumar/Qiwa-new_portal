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
import { companyNames } from "utils/common";
import { Currencies } from "utils/common";

function OrganizationForm() {
  const location = useLocation();

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("edit-organization")) {
      setMode("edit");
    } else if (location.pathname.includes("add-organization")) {
      setMode("add");
    }
  }, [location]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Success("Organization Added Successfully");
    Swal.fire({
      icon: "success",
      title: "success",
      text: `${"Oragnization Added Successfully"}`,
      showConfirmButton: false,
      timer: 3000,
    });
    // Here you can perform further actions like sending the data to an API
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
                  {mode === "edit" ? "Edit Organization" : "Add Organization"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Tax ID */}
                  <MDBox mb={2}>
                    <MDInput {...register("taxId", { required: true })} label="Tax ID*" fullWidth />
                    {errors.taxId && <p className="error-message">{"Tax ID is required"}</p>}
                  </MDBox>

                  {/* Company ID */}
                  <MDBox mb={2}>
                    <MDBox mb={2}>
                      <Select placeholder="Select Company" options={companyNames} />
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
                    <Select placeholder="Select Currency*" options={Currencies} />

                    {/* {errors.currency && <p className="error-message">{"Currency is required"}</p>} */}
                  </MDBox>

                  {/* Phone */}
                  <MDBox mb={2}>
                    <MDInput {...register("phone", { required: true })} label="Phone*" fullWidth />
                    {errors.phone && <p className="error-message">{"Phone is required"}</p>}
                  </MDBox>

                  {/* Mobile */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("mobile", { required: true })}
                      label="Mobile*"
                      fullWidth
                    />
                    {errors.mobile && <p className="error-message">{"Mobile is required"}</p>}
                  </MDBox>

                  {/* Email */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      label="Email*"
                      fullWidth
                    />
                    {errors.email && <p className="error-message">{"Valid email is required"}</p>}
                  </MDBox>

                  {/* Website */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("website", { required: true })}
                      label="Website*"
                      fullWidth
                    />
                    {errors.website && <p className="error-message">{"Website is required"}</p>}
                  </MDBox>

                  {/* Parent Company */}
                  <MDBox mb={2}>
                    {/* <MDInput
                      {...register("parentCompany", { required: true })}
                      label="Parent Company*"
                      fullWidth
                    /> */}
                    <MDBox mb={2}>
                      <Select placeholder="Select Parent Company*" options={companyNames} />
                    </MDBox>
                    {/* {errors.parentCompany && (
                      <p className="error-message">{"Parent Company is required"}</p>
                    )} */}
                  </MDBox>

                  {/* Company Favicon */}
                  <MDBox mb={2}>
                    <label htmlFor="companyFavicon">Company Logo</label>
                    <br />
                    <input
                      type="file"
                      {...register("companyFavicon", { required: true })}
                      id="companyFavicon"
                      accept="image/*" // Accept image files
                    />
                    {errors.companyFavicon && (
                      <p className="error-message">{"Company Favicon is required"}</p>
                    )}
                  </MDBox>

                  {mode === "edit" && (
                    <MDBox>
                      {/* <Switch checked={active} onChange={() => setActive(!active)} /> */}
                      <Select placeholder="Select Status" options={statuses} />
                    </MDBox>
                  )}

                  <MDBox mt={2} display="flex" justifyContent="center">
                    <MDButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      style={{ minWidth: "250px", marginRight: "4px" }}
                    >
                      {mode === "edit" ? "Edit Organization" : "Add Organization"}
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      type="reset"
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

export default OrganizationForm;
