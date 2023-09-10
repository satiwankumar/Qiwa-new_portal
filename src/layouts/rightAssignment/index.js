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
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add"; //
import { Link } from "react-router-dom";
import DataTable from "examples/Tables/DataTable";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { dummyEmployeeNames } from "utils/common";
import { dummyRoles } from "utils/common";
import'./index.css'
import MDButton from "components/MDButton";

function RightAssignment() {
  const { t } = useTranslation();
  const { columns, rows } = authorsTableData();
  const handleReset = () => {
    reset();
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
                display="flex"
                alignItems="center"
                justifyContent="space-between" // Add this line
              >
                <MDTypography variant="h6" color="white">
                  {t("Right Assignment")}
                </MDTypography>
                {/* Add button icon */}
              
              </MDBox>
              <MDBox px={2} pt={6} pb={3}>
                <MDBox mb={2}>
                  <div style={{ display: "flex",justifyContent:"space-between" }}>
                    <Select
                      placeholder={t("Select Employee")}
                      className="selector"
                      options={dummyEmployeeNames}
                    />

                    <Select
                      placeholder={t("Select Role")}
                      className="selector"
                      options={dummyRoles}
                    />
                  </div>
                </MDBox>
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
              <MDBox mt={2} pb={3} display="flex" justifyContent="center">
                    <MDButton
                      variant="gradient"
                      color="info"
                      type="submit"
                      style={{ minWidth: "250px", marginRight: "4px" }}
                    >
                      {t("Submit") }
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
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}
export default RightAssignment;
