// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Data
import authorsTableData from "./data/authorsTableData";
import projectsTableData from "./data/projectsTableData";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add"; //
import { Link } from "react-router-dom";
import DataTable from "examples/Tables/DataTable";
import { useTranslation } from "react-i18next";

function TimeSheet() {
  const { columns, rows } = authorsTableData();
  const { t } = useTranslation();
  const { columns: pColumns, rows: pRows } = projectsTableData();
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
                display="flex"
                alignItems="center"
                justifyContent="space-between" // Add this line
              >
                <MDTypography variant="h6" color="white">
                  {t("Time Sheet")}
                </MDTypography>
                {/* Add button icon */}
                <IconButton
                  component={Link}
                  to="/add-time-sheet" // Replace with your actual route
                  color="inherit"
                >
                  <AddIcon />
                </IconButton>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={true}
                  showTotalEntries={true}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default TimeSheet;
