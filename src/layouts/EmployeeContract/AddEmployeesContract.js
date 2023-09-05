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

function EmployeeContractForm() {
  const location = useLocation();
  const today = new Date().toISOString().split("T")[0];

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

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

  const handleReset = () =>{
    reset()
  }

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
                  {mode === "edit" ? "Edit Employee Contract" : "Add Employee Contract"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Id */}
                  <MDBox mb={2}>
                    <Select placeholder="Select Employee" options={dummyEmployeeNames} />
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
                      label="Contract Name*"
                      fullWidth
                    />
                    {errors.contractName && (
                      <p className="error-message">{errors.contractName.message}</p>
                    )}
                  </MDBox>

                  {/* Start Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="startDate">
                      Start Date*
                    </InputLabel>
                    <MDInput
                      {...register("startDate", {
                        required: "Start Date is required",
                        max: {
                          value: today,
                          message: "Please select a date after today",
                        },
                      })}
                      type="date"
                      fullWidth
                    />
                    {errors.startDate && (
                      <p className="error-message">{errors.startDate.message}</p>
                    )}
                  </MDBox>

                  {/* End Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="endDate">
                      End Date*
                    </InputLabel>
                    <MDInput
                      {...register("endDate", {
                        required: "End Date is required",
                      })}
                      type="date"
                      fullWidth
                    />
                    {errors.endDate && <p className="error-message">{errors.endDate.message}</p>}
                  </MDBox>

                  {/* Salary */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("salary", { required: "Salary is required" })}
                      label="Salary*"
                      fullWidth
                    />
                    {errors.salary && <p className="error-message">{errors.salary.message}</p>}
                  </MDBox>

                  {/* Currency */}
                  <MDBox mb={2}>
                    <Select placeholder="Select Currency" options={Currencies} />

                    {/* <MDInput
                      {...register("currency", { required: true })}
                      label="Currency*"
                      fullWidth
                    /> */}
                    {errors.currency && <p className="error-message">{"Currency is required"}</p>}
                  </MDBox>
                  {mode === "edit" && (
                    <MDBox>
                      {/* <Switch checked={active} onChange={() => setActive(!active)} /> */}
                      <Select placeholder="Select Status" options={statuses} />
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
                        {mode === "edit" ? "Edit Contract" : "Add Contract"}
                      </MDButton>
                      <MDButton
                        variant="gradient"
                        color="error"
                        type="button"
                        onClick={handleReset}
                        style={{ minWidth: "250px" }}
                      >
                        Reset
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
