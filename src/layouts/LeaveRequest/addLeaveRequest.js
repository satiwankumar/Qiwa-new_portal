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
import { dummyLeaveTypes } from "utils/common";

function AddLeaveRequest() {
  const location = useLocation();

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("edit-leave-request")) {
      setMode("edit");
    } else if (location.pathname.includes("add-leave-request")) {
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
                  {mode === "edit" ? "Edit Leave Request" : "Add Leave Request"}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Employee Name (Dropdown) */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("employeeName", { required: true })}
                      value="John Walk"
                      placeholder="John Walker...."
                      fullWidth
                      disabled
                    />
                    {errors.employeeName && (
                      <p className="error-message">{"Employee Name is required"}</p>
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

                  {/* Manager Name */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("managerName", { required: true })}
                      placeholder="manager "
                      value="Manager A"
                      disabled
                      fullWidth
                    />
                    {errors.managerName && (
                      <p className="error-message">{"Manager Name is required"}</p>
                    )}
                  </MDBox>
                  {/* Leave LEave Type (Dropdown) */}
                  <MDBox mb={2}>
                    <Select placeholder="Select Leave Approval" options={dummyLeaveTypes} />
                  </MDBox>

                  <MDBox mb={2}>
                    <MDInput
                      {...register("leaveReason", { required: true })}
                      label="Leave Reason*"
                      fullWidth
                    />
                    {errors.leaveReason && (
                      <p className="error-message">{"Leave Reason is required"}</p>
                    )}
                  </MDBox>
                  {/* Leave Approval (Dropdown) */}
                  <MDBox mb={2}>
                    <Select
                      placeholder="Select Leave Approval"
                      options={statuses}
                      // {...register("leaveApproval", { required: true })}
                    />
                    {/* {errors.leaveApproval && (
                      <p className="error-message">{"Leave Approval is required"}</p>
                    )} */}
                  </MDBox>

                  {/* Action */}
                  <MDBox mt={2}>
                    <MDButton variant="gradient" color="info" type="submit" fullWidth>
                      {mode === "edit" ? "Edit Leave" : "Add Leave"}
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

export default AddLeaveRequest;
