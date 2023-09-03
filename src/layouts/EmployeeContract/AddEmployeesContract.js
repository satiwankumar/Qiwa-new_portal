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

function EmployeeContractForm() {
  const location = useLocation();

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
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can perform further actions like sending the data to an API
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
                      {...register("contractName", { required: true })}
                      label="Contract Name*"
                      fullWidth
                    />
                    {errors.contractName && (
                      <p className="error-message">{"Contract Name is required"}</p>
                    )}
                  </MDBox>

                  {/* Start Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="startDate">
                      Start Date*
                    </InputLabel>
                    <MDInput {...register("startDate", { required: true })} type="date" fullWidth />
                    {errors.startDate && (
                      <p className="error-message">{"Start Date is required"}</p>
                    )}
                  </MDBox>

                  {/* End Date */}
                  <MDBox mb={2}>
                    <InputLabel shrink={true} htmlFor="endDate">
                      End Date*
                    </InputLabel>
                    <MDInput {...register("endDate", { required: true })} type="date" fullWidth />
                    {errors.endDate && <p className="error-message">{"End Date is required"}</p>}
                  </MDBox>

                  {/* Salary */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("salary", { required: true })}
                      label="Salary*"
                      fullWidth
                    />
                    {errors.salary && <p className="error-message">{"Salary is required"}</p>}
                  </MDBox>

                  {/* Currency */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("currency", { required: true })}
                      label="Currency*"
                      fullWidth
                    />
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
                        type="reset"
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
