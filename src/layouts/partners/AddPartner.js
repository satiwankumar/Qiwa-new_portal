import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Grid, InputLabel } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { statuses } from "utils/common";
import { Languages } from "utils/common";
import { useTranslation } from "react-i18next";

function AddPartnerForm() {
  const location = useLocation();
  const { t } = useTranslation();

  const [mode, setMode] = useState("add");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (location.pathname.includes("edit-partner")) {
      setMode("edit");
    } else if (location.pathname.includes("add-partner")) {
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

  const handleReset = () => {
    reset();
  };

  const columns = [
    { Header: t("Partner Name"), accessor: "address", align: "left" },
    { Header: t("Address"), accessor: "address", align: "left" },
    { Header: t("Tax ID"), accessor: "taxId", align: "left" },
    { Header: t("Phone"), accessor: "phone", align: "left" },
    { Header: t("Mobile"), accessor: "mobile", align: "left" },
    { Header: t("Email"), accessor: "email", align: "left" },
    { Header: t("Website"), accessor: "website", align: "left" },
    { Header: t("Language"), accessor: "language", align: "left" },
    { Header: t("Tags"), accessor: "tags", align: "left" },
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
                  {mode === "edit" ? t("Edit Partner") : t("Add Partner")}
                </MDTypography>
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {columns.map((column) => (
                    <MDBox mb={2} key={column.accessor}>
                      {column.Header === "Language" ? (
                        <Select options={Languages} />
                      ) : (
                        <>
                          {column.accessor === "email" ? (
                            <>
                              <MDInput
                                {...register(column.accessor, {
                                  required: `${column.Header} is required`,
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                  },
                                })}
                                label={`${column.Header}*`}
                                fullWidth
                              />
                            </>
                          ) : (
                            <>
                              {column.accessor === "phone" || column.accessor === "mobile" ? (
                                <>
                                  <MDInput
                                    {...register(column.accessor, {
                                      required: `${column.Header} is required`,
                                      pattern: {
                                        value: /^\d+$/,
                                        message: "Invalid phone number",
                                      },
                                    })}
                                    label={`${column.Header}*`}
                                    fullWidth
                                    type="number"
                                  />
                                </>
                              ) : (
                                <>
                                  {column.accessor === "partnerName" ||
                                  column.accessor === "address" ? (
                                    <>
                                      <MDInput
                                        {...register(column.accessor, {
                                          required: `${column.Header} is required`,
                                          minLength: {
                                            value: 20,
                                            message: "Minimum length is 20 characters",
                                          },
                                        })}
                                        label={`${column.Header}*`}
                                        fullWidth
                                      />
                                    </>
                                  ) : (
                                    <>
                                      <MDInput
                                        {...register(column.accessor, {
                                          required: `${column.Header} is required`,
                                        })}
                                        label={`${column.Header}*`}
                                        fullWidth
                                      />
                                    </>
                                  )}
                                </>
                              )}
                            </>
                          )}
                          {errors[column.accessor] && (
                            <p className="error-message">{errors[column.accessor].message}</p>
                          )}
                        </>
                      )}
                    </MDBox>
                  ))}

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
                      {mode === "edit" ? t("Edit Partner") : t("Add Partner")}
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

export default AddPartnerForm;
