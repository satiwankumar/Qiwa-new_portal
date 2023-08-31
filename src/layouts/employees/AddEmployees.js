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

function EmployeeForm() {
  const location = useLocation();

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
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions like sending the data to an API
  };

  const companies = [
    { value: "Company A", label: "Company A" },
    { value: "Company B", label: "Company B" },
    { value: "Company C", label: "Company C" },
  ];

  const departments = [
    { value: "Department X", label: "Department X" },
    { value: "Department Y", label: "Department Y" },
    { value: "Department Z", label: "Department Z" },
  ];

  const managers = [
    { value: "Manager A", label: "Manager A" },
    { value: "Manager B", label: "Manager B" },
    { value: "Manager C", label: "Manager C" },
  ];

  const coaches = [
    { value: "Coach 1", label: "Coach 1" },
    { value: "Coach 2", label: "Coach 2" },
    { value: "Coach 3", label: "Coach 3" },
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
                  {mode === "edit" ? "Edit Employee" : "Add Employee"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Name */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("employeeName", { required: true })}
                      label="Employee Name*"
                      fullWidth
                    />
                    {errors.employeeName && (
                      <p className="error-message">{"Employee Name is required"}</p>
                    )}
                  </MDBox>

                  {/* Position */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("position", { required: true })}
                      label="Position*"
                      fullWidth
                    />
                    {errors.position && <p className="error-message">{"Position is required"}</p>}
                  </MDBox>

                  {/* Work Mobile */}
                  <MDBox mb={2}>
                    <MDInput {...register("workMobile")} label="Work Mobile" fullWidth />
                  </MDBox>

                  {/* Work Phone */}
                  <MDBox mb={2}>
                    <MDInput {...register("workPhone")} label="Work Phone" fullWidth />
                  </MDBox>

                  {/* Work Email */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("workEmail", { required: true, pattern: /^\S+@\S+$/i })}
                      label="Work Email*"
                      fullWidth
                    />
                    {errors.workEmail && (
                      <p className="error-message">{"Valid email is required"}</p>
                    )}
                  </MDBox>

                  {/* Company */}
                  <MDBox mb={2}>
                    {/* <Select {...register("company")} label="Company" fullWidth> */}
                    {/* {companies.map((company) => (
                        <MenuItem key={company} value={company}>
                          {company}
                        </MenuItem>
                      ))}
                    </Select> */}
                    <Select placeholder="Select Company*" options={companies} />
                  </MDBox>

                  {/* Department */}
                  <MDBox mb={2}>
                    {/* <Select {...register("department")} label="Department" fullWidth>
                      {departments.map((department) => (
                        <MenuItem key={department} value={department}>
                          {department}
                        </MenuItem>
                      ))}
                    </Select> */}
                    <Select placeholder="Select Department*" options={departments} />
                  </MDBox>

                  {/* Manager */}
                  <MDBox mb={2}>
                    {/* <Select {...register("manager")} label="Manager" fullWidth>
                      {managers.map((manager) => (
                        <MenuItem key={manager} value={manager}>
                          {manager}
                        </MenuItem>
                      ))}
                    </Select> */}
                    <Select placeholder="Select Manager*" options={managers} />
                  </MDBox>

                  {/* Coach */}
                  <MDBox mb={2}>
                    {/* <Select {...register("coach")} label="Coach" fullWidth>
                      {coaches.map((coach) => (
                        <MenuItem key={coach} value={coach}>
                          {coach}
                        </MenuItem>
                      ))}
                    </Select> */}
                    <Select placeholder="Select Coaches*" options={coaches} />
                  </MDBox>

                  {mode === "edit" && (
                    <MDBox>
                      {/* <Switch checked={active} onChange={() => setActive(!active)} /> */}
                      <Select placeholder="Select Status" options={statuses} />
                    </MDBox>
                  )}

                  <MDBox mt={2}>
                    <MDButton variant="gradient" color="info" type="submit" fullWidth>
                      {mode === "edit" ? "Edit Employee" : "Add Employee"}
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
