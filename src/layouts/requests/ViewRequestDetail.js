import React from "react";
import {
  Button,
  Card,
  Grid,
  Icon,
  MenuItem,
  Select,
  TextareaAutosize,
  Tooltip,
  Typography,
} from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Divider from "@mui/material/Divider";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard"; // Import the ProfileInfoCard component
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { Link } from "react-router-dom";

const requestInfo = {
  EmployeeId: "EMP123",
  EmployeeName: "John Doe",
  Position: "Software Engineer",
  WorkEmail: "john.doe@example.com",
  Company: "Example Corp",
  Department: "Engineering",
  Manager: "Jane Smith",
};

const socialLinks = [
  { link: "#", icon: <Icon>facebook</Icon>, color: "facebook" },
  { link: "#", icon: <Icon>twitter</Icon>, color: "twitter" },
  { link: "#", icon: <Icon>linkedin</Icon>, color: "linkedin" },
];

const action = {
  route: "/edit-profile", // Replace with the actual route
  tooltip: "Edit Profile",
};
function ViewRequestPage() {
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
                  View Requests
                </MDTypography>
              </MDBox>
              <MDBox px={6} py={6} display="flex" flexWrap="wrap">
                {Object.entries(requestInfo).map(([key, value]) => (
                  <MDBox key={key} flexBasis="33.33%" px={3} py={2}>
                    <MDTypography variant="subtitle1">
                      <strong>{key}:</strong> {value}
                    </MDTypography>
                  </MDBox>
                ))}
              </MDBox>
              <MDBox px={6} py={3} display="flex" flexDirection="column">
                <MDBox mb={2}>
                  <Typography variant="h6" gutterBottom>
                    Select Action
                  </Typography>
                  <Select defaultValue="Accept" value="Accept" sx={{ width: "50%", p: 2 }}>
                    <MenuItem value="">Select</MenuItem>
                    <MenuItem value="action1">Accept </MenuItem>
                    <MenuItem value="action2">Reject</MenuItem>
                    <MenuItem value="action3">Return</MenuItem>
                  </Select>
                </MDBox>

                <MDBox mb={2}>
                  <Typography variant="h6" gutterBottom>
                    Message
                  </Typography>
                  <TextareaAutosize
                    rowsMin={3}
                    placeholder="Enter your text here..."
                    style={{
                      width: "50%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                      paddingBottom: "50px",
                    }}
                  />
                </MDBox>

                <MDBox>
                  <Button variant="contained" color="primary" style={{ color: "White" }}>
                    Submit
                  </Button>
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default ViewRequestPage;
