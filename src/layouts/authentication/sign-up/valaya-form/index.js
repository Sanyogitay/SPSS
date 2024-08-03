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
import { useEffect, useState } from "react";



function ValayaForm({ id = "", row }) {
  // console.log("SINGLE ROW ID -> ", row);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [district, setDistrict] = useState([]);

  const data = {name,description,district}

  useEffect(() => {
    if (id !== "") {
      // console.log("id -> ", id);
      const {
        name: {
          props: { name: userName },
        },
        District: {
          props: { children: districtName },
        },
        Description: {
          props: { children },
        },
      } = row;
      setName(userName);
      setDistrict(districtName);
      setDescription(children);
    }
  }, [id]);

const AddValaya = () =>{
  fetch( `http://192.168.2.126:8080/valaya/`,

    {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
     body: JSON.stringify({data}),
    }
  )
    .then((response) => {
      if (response.ok) {
        console.log("sdfg");
      
      }
      throw response;
    })

    .catch((err) => err);
};





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
                Valaya Form
              </MDTypography>
            </MDBox>
            <MDBox pt={3}>
              <Card>
                <MDBox pt={4} pb={3} px={3}>
                  <MDBox component="form" role="form">
                    <Grid container spacing={2}>
                      <Grid item lg={12} xs={12} mb={2} md={12}>
                        <MDInput
                          type="text"
                          label="Valaya Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          variant="standard"
                          fullWidth
                        />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput
                          type="text"
                          label="Valaya District"
                          variant="standard"
                          fullWidth
                          value={district}
                          onChange={(e) => setDistrict((e.target.value).split())}
                        />
                      </Grid>
                      <Grid item lg={6} xs={12} mb={2} md={12}>
                        <MDInput
                          type="text"
                          label="Valaya Description"
                          variant="standard"
                          fullWidth
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Grid>
                    </Grid>
                    <MDBox mt={4} mb={1}>
                      <MDButton variant="gradient" color="info" fullWidth onClick={AddValaya}>
                        {!id ? "Add Valaya" : "Update Valaya"}
                      </MDButton>
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

export default ValayaForm;
