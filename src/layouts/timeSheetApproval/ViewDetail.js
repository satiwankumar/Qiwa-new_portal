import React from "react";
import { Button, Card, Grid, TextareaAutosize, Tooltip, Typography } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard"; // Import the ProfileInfoCard component
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "react-router-dom";
import MDButton from "components/MDButton";
import { statuses } from "utils/common";
import Select from "react-select";

const contractInfo = {
    "Total Hours": "40 hours",
    "Total Day": "12",

};

const action = {
    route: "/edit-profile", // Replace with the actual route
    tooltip: "Edit Profile",
};

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import timeSheetTableData from "./data/timeSheetTableData";


function TimeSheetApprovalRequest() {
    const { columns, rows } = timeSheetTableData();

    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox pt={6} pb={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
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
                                display="flex"
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <MDTypography variant="h6" color="white">
                                    Project Approval Request
                                </MDTypography>
                            </MDBox>
                            <MDBox px={6} py={6} display="flex" flexWrap="wrap">
                                {Object.entries(contractInfo).map(([key, value]) => (
                                    <MDBox key={key} flexBasis="33.33%" px={3} py={2}>
                                        <MDTypography variant="subtitle1">
                                            <strong>{key}:</strong> {value}
                                        </MDTypography>
                                    </MDBox>
                                ))}
                            </MDBox>
                            <MDBox px={6} py={3} display="flex" flexDirection="column">
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Dessert (100g serving)</TableCell>
                                                <TableCell align="right">Calories</TableCell>
                                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
                                                <TableRow
                                                    key={row.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {row.name}
                                                    </TableCell>
                                                    <TableCell align="right">{row.calories}</TableCell>
                                                    <TableCell align="right">{row.fat}</TableCell>
                                                    <TableCell align="right">{row.carbs}</TableCell>
                                                    <TableCell align="right">{row.protein}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <MDBox mt={2}>
                                    <MDBox mt={2} display="flex" justifyContent="center">
                                        <MDButton
                                            variant="gradient"
                                            color="info"
                                            type="submit"
                                            style={{ minWidth: "250px", marginRight: "4px" }}
                                        >
                                            Submit
                                        </MDButton>
                                        <MDButton
                                            variant="gradient"
                                            color="error"
                                            type="reset"
                                            style={{ minWidth: "250px" }}
                                        >
                                            Cancel
                                        </MDButton>
                                    </MDBox>
                                </MDBox>
                            </MDBox>
                        </Card>
                    </Grid>
                </Grid>
            </MDBox>
        </DashboardLayout>
    );
}

export default TimeSheetApprovalRequest;
