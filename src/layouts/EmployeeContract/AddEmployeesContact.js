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
                  {mode === "edit" ? "Edit Employee Contract" : "Add Employee Contract"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Id */}
                  <MDBox mb={2}>
                    <Select placeholder="Select Employyee" options={statuses} />
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
                    <MDInput
                      {...register("startDate", { required: true })}
                      label="Start Date*"
                      fullWidth
                    />
                    {errors.startDate && (
                      <p className="error-message">{"Start Date is required"}</p>
                    )}
                  </MDBox>

                  {/* End Date */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("endDate", { required: true })}
                      label="End Date*"
                      fullWidth
                    />
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
                    <MDButton variant="gradient" color="info" type="submit" fullWidth>
                      {mode === "edit" ? "Edit Contract" : "Add Contract"}
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

export default EmployeeContractForm;
