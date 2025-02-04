// / eslint-disable react/prop-types /
// / eslint-disable react/function-component-definition /
/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by https://www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
// import ManIcon from "@mui/icons-material/Man";
// import WomanIcon from '@mui/icons-material/Woman';
// import GroupsIcon from '@mui/icons-material/Groups';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// Images
import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

import { useEffect, useState } from "react";

export default function AllEventsDataTable() {
  const [editOpen, setEditOpen] = useState(false);
  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => setEditOpen(false);

  const Author = ({ image, name, email }) => {
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  }

  // const Job = ({ title, description }) => (
  //   <MDBox lineHeight={1} textAlign="left">
  //     <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
  //       {title}
  //     </MDTypography>
  //     <MDTypography variant="caption">{description}</MDTypography>
  //   </MDBox>
  // );

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentId, setCurrentId] = useState("");

  const getData = () => {
    setLoading(true);
    fetch("https://62e28e76e8ad6b66d85e4d11.mockapi.io/events")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw res;
      })
      .then((json) => {
        console.log(" ghghsghghsg", json);
        const temp = [];
        json.map((j, i) => {
          temp.push({
            Id: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Id}
              </MDTypography>
            ),
            name: <Author image={team2} name={j.EventName} />,

            date: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Date}
              </MDTypography>
            ),

            wing: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Wing}
              </MDTypography>
            ),
            mens: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.TotalMens}
              </MDTypography>
            ),
            womens: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.TotalWomens}
              </MDTypography>
            ),
            yoga: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.TotalYogaBandhus}
              </MDTypography>
            ),
            status: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Status}
              </MDTypography>
            ),
            valaya: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Valaya}
              </MDTypography>
            ),
            city: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.City}
              </MDTypography>
            ),
            district: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.District}
              </MDTypography>
            ),
            state: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.State}
              </MDTypography>
            ),
            country: (
              <MDTypography
                component="a"
                href="#"
                variant="caption"
                color="text"
                fontWeight="medium"
              >
                {j.Country}
              </MDTypography>
            ),
            actions: (
              <>
                <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
                  <div
                    style={{
                      fontSize: "2em",
                      borderRadius: "6px",
                      color: "orangered",
                      cursor: "pointer",
                    }}
                  >
                    <EditIcon
                      onClick={() => {
                        setCurrentId(i);
                        handleEditOpen();
                      }}
                    />
                  </div>
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="caption"
                  color="text"
                  fontWeight="medium"
                >
                  <div style={{ fontSize: "2em", borderRadius: "6px", color: "orangered" }}>
                    <DeleteIcon />
                  </div>
                </MDTypography>
              </>
            ),
          });
          return "";
        });
        setEvents(temp);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // const All = ({ image }) => <MDAvatar src={image} size="sm" />;

  return {
    columns: [
      { Header: "event Id", accessor: "Id", width: "1%", align: "left" },
      { Header: "Event Name", accessor: "name", width: "45%", align: "left" },
      { Header: "12 april, 2021", accessor: "date", align: "left" },
      { Header: "Wing", accessor: "wing", align: "left" },
      { Header: "Total Mens", accessor: "mens", align: "left" },
      { Header: "Total Womens", accessor: "womens", align: "left" },
      { Header: "Total Yoga Bandhus", accessor: "yoga", align: "left" },
      { Header: "Status", accessor: "status", align: "left" },
      { Header: "Valaya(Group of Areas)", accessor: "valaya", align: "left" },
      { Header: "City/Town", accessor: "city", align: "left" },
      { Header: "District", accessor: "district", align: "left" },
      { Header: "State", accessor: "state", align: "left" },
      { Header: "Country", accessor: "country", align: "left" },
      { Header: "Actions", accessor: "actions", align: "left" },
    ],

    rows: events,
    handleEditClose,
    handleEditOpen,
    editOpen,
    currentId,
    loading,
  };
}
