/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
// import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Grid } from "@mui/material";

function StatusForm() {
  return (
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
                Branch
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <Grid container spacing={2}>
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Branch Name" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Branch Address" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput
                          type="text"
                          label="Upa Valaya(Area)"
                          variant="standard"
                          fullWidth
                        />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Mobile No" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput
                          type="text"
                          label="Valaya (Group of areas)"
                          variant="standard"
                          fullWidth
                        />
                      </Grid>
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Mobile.No" variant="standard" fullWidth />
                      </Grid>
                      
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Status" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="City/Town" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="District" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="State" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Country" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="Wing" variant="standard" fullWidth />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput type="text" label="All" variant="standard" fullWidth />
                      </Grid>
                    </Grid>
                    <MDBox mt={4} mb={1}>
                      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                        <MDButton sx={{ width: "10rem",backgroundColor:"orangered",color:"white!important" }}>
                          Save
                        </MDButton>
                        <MDButton sx={{ width: "10rem",backgroundColor:"orangered",color:"white!important" }}>
                          Cancel
                        </MDButton>
                      </div>
                    </MDBox>
                  </MDBox>
                </MDBox>
              </Card>
            </MDBox>
          </Card>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default StatusForm;
