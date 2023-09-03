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
import { dummyEmployeeNames } from "utils/common";
import { companyNames } from "utils/common";

function DepartmentForm() {
  const location = useLocation();

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("edit-department")) {
      setMode("edit");
    } else if (location.pathname.includes("add-department")) {
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
    // Here you can perform further actions like sending the data to an API
  };
  const onFocus = ({ focused, isDisabled }) => {
    const msg = `You are currently focused on option ${focused.label}${
      isDisabled ? ", disabled" : ""
    }`;
    setAriaFocusMessage(msg);
    return msg;
  };

  const onMenuOpen = () => setIsMenuOpen(true);
  const onMenuClose = () => setIsMenuOpen(false);

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
                  {mode === "edit" ? "Edit Departments" : "Add Departments"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Department Name */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("departmentName", { required: true })}
                      label="Department Name*"
                      fullWidth
                    />
                    {errors.departmentName && (
                      <p className="error-message">{"Department Name is required"}</p>
                    )}
                  </MDBox>

                  {/* Manager */}
                  <MDBox mb={2}>
                    {/* <MDInput
                      {...register("manager", { required: true })}
                      label="Manager*"
                      fullWidth
                    /> */}
                    <MDBox mb={2}>
                      <Select placeholder="Select Manager" options={dummyEmployeeNames} />
                    </MDBox>
                    {/* {errors.manager && <p className="error-message">{"Manager is required"}</p>} */}
                  </MDBox>

                  {/* Parent Department */}
                  {/* <MDBox mb={2}>
                    <MDInput
                      {...register("parentDepartment")}
                      label="Parent Department"
                      fullWidth
                    />
                  </MDBox> */}

                  <MDBox mb={2}>
                    <Select placeholder="Parent Department" options={companyNames} />
                  </MDBox>

                  <MDBox mb={2}>
                    <Select placeholder="Select Company" options={companyNames} />
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
                      {mode === "edit" ? "Edit Department" : "Add Department"}
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

export default DepartmentForm;
