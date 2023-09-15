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
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { organization } from "utils/common";
import api from "utils/api";
import { ADD_DEPARTMENT } from "endpoints/constants";
import { apiData } from "utils/common";

function DepartmentForm() {
  const location = useLocation();
  const { t } = useTranslation();
  const [selectedOrganizer, setSelectedOrganizer] = useState(null);
  const handleOrganizerChange = (selectedOption) => {
    setSelectedOrganizer(selectedOption);
  };
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
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = {
        header: {
          transactionId: apiData.transactionId,
          requestDateTime: apiData.requestDateTime,
        },
        body: {
          department: {
            deptNameAr: data.departmentName,
            deptNameEn: data.departmentName,
            description: data.description,
            organization: {
              id: selectedOrganizer ? selectedOrganizer.value : null,
            },
            createdBy: apiData.createdBy,
            lastUpdateBy: apiData.lastUpdateBy,
          },
        },
      };
      const response = await api.post(ADD_DEPARTMENT, formData);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Department Added Successfully",
        showConfirmButton: false,
        timer: 3000,
      });
      reset();
      setSelectedOrganizer(null);
    } catch (error) {
      console.error("API request error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while adding the Department",
      });
    }
  };

  const onFocus = ({ focused, isDisabled }) => {
    const msg = `You are currently focused on option ${focused.label}${
      isDisabled ? ", disabled" : ""
    }`;
    setAriaFocusMessage(msg);
    return msg;
  };

  const handleReset = () => {
    reset();
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
                  {mode === "edit" ? t("Edit Departments") : t("Add Departments")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Department Name */}
                  <MDBox mb={2}>
                    <MDInput
                      {...register("departmentName", {
                        required: "Department Name is required",
                        maxLength: {
                          value: 20,
                          message: "Maximum length is 20 characters",
                        },
                      })}
                      label={t("Department Name*")}
                      fullWidth
                    />
                    {errors.departmentName && (
                      <p className="error-message">{errors.departmentName.message}</p>
                    )}
                  </MDBox>
                  <MDBox mb={2}>
                    <MDInput
                      {...register("description", {
                        required: "description Name is required",
                        maxLength: {
                          value: 20,
                          message: "Maximum length is 20 characters",
                        },
                      })}
                      label={t("Description")}
                      fullWidth
                    />
                    {errors.description && (
                      <p className="error-message">{errors.description.message}</p>
                    )}
                  </MDBox>

                  {/* Manager */}
                  {/* <MDBox mb={2}> */}
                  {/* <MDInput
                      {...register("manager", { required: true })}
                      label="Manager*"
                      fullWidth
                    /> */}
                  {/* <MDBox mb={2}>
                      <Select placeholder={t("Select Manager")} options={dummyEmployeeNames} />
                    </MDBox> */}
                  {/* {errors.manager && <p className="error-message">{"Manager is required"}</p>} */}
                  {/* </MDBox> */}

                  {/* <MDBox mb={2}>
                    <Select placeholder={t("Parent Department")} options={companyNames} />
                  </MDBox> */}

                  <MDBox mb={2}>
                    <Select
                      placeholder={t("Select Organizer")}
                      options={organization}
                      onChange={handleOrganizerChange}
                      value={selectedOrganizer}
                    />
                  </MDBox>
                  {mode === "edit" && (
                    <MDBox>
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
                      {mode === "edit" ? t("Edit Department") : t("Add Department")}
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

export default DepartmentForm;
