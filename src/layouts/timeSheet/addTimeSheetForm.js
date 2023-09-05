import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Card, Grid, InputLabel, TextareaAutosize } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useLocation } from "react-router-dom";
import Select from "react-select";
import { dummyProjectTask } from "utils/common";
import { statuses } from "utils/common";
import { Languages } from "utils/common";

function AddTimeSheetForm() {
    const location = useLocation();
    const [mode, setMode] = useState("add");
    const [active, setActive] = useState(true);

    useEffect(() => {
        if (location.pathname.includes("edit-time-sheet")) {
            setMode("edit");
        } else if (location.pathname.includes("add-time-sheet")) {
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
                                    {mode === "edit" ? "Edit Project" : "Add Project"}
                                </MDTypography>
                            </MDBox>
                            <MDBox px={2} pt={6} pb={3}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Employee Id */}
                                    <MDBox mb={2}>
                                        <Select placeholder="Select Project Task" options={dummyProjectTask} />
                                    </MDBox>

                                    <MDBox mb={2}>
                                        <MDInput
                                            {...register("timeSpent", { required: true })}
                                            label="TIme Spent*"
                                            fullWidth
                                        />
                                        {errors.timeSpent && (
                                            <p className="error-message">{"Contract Name is required"}</p>
                                        )}
                                    </MDBox>

                                    {/* Start Date */}
                                    <MDBox mb={2}>
                                        <InputLabel shrink={true} htmlFor="dateStarted">
                                            Date Started*
                                        </InputLabel>
                                        <MDInput {...register("dateStarted", { required: true })} type="date" fullWidth />
                                        {errors.dateStarted && (
                                            <p className="error-message">{"Date Started is required"}</p>
                                        )}
                                    </MDBox>

                                    {/* End Date */}
                                    <MDBox mb={2}>
                                        <InputLabel shrink={true} htmlFor="timeStarted">
                                            Time Started*
                                        </InputLabel>
                                        <MDInput {...register("timeStarted", { required: true })} type="time" fullWidth />
                                        {errors.timeStarted && <p className="error-message">{"Time Strated is required"}</p>}
                                    </MDBox>

                                    {/* Salary */}
                                    <MDBox mb={2}>
                                        <TextareaAutosize
                                            {...register("description", { required: true })}
                                            rowsMin={4}
                                            placeholder="Description"
                                            style={{
                                                width: "100%",
                                                border: "1px solid #ccc",
                                                borderRadius: "4px",
                                                paddingBottom: "50px",

                                                fontSize: "18px",
                                            }}
                                        />
                                        {errors.description && <p className="error-message">{"Description is required"}</p>}
                                    </MDBox>
                                    {/* Action */}
                                    <MDBox mt={2}>
                                        <MDBox mt={2} display="flex" justifyContent="center">
                                            <MDButton
                                                variant="gradient"
                                                color="info"
                                                type="submit"
                                                style={{ minWidth: "250px", marginRight: "4px" }}
                                            >
                                                {mode === "edit" ? "Edit Time Sheet" : "Add Time Sheet"}
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

export default AddTimeSheetForm;
