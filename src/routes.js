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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
// import Billing from "layouts/billing";
// import RTL from "layouts/rtl";
import Profile from "layouts/profile";
// import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";
import Tables from "layouts/tables/showTables/NoOfBranches";
// import Tables2 from "layouts/tables/showTables/StartedBtn2Dates";
import BusinessIcon from '@mui/icons-material/Business';
import Valaya from "layouts/tables/showTables/Valaya";
import StartedData from "layouts/tables/showTables/StartedBtn2Dates";
import BranchStatus from "layouts/tables/showTables/BranchStatus";
import BatchWings from "layouts/tables/showTables/BatchWings";
import BranchDetails from "layouts/tables/showTables/BranchDetails";
import AllEvents from "layouts/tables/showTables/AllEvents";
import NumberOfNamaskar from "layouts/tables/showTables/NumberOfNamaskar";
// import BranchForm from "layouts/authentication/sign-up/branch-form";


const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "User",
    key: "user",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/user",
    component: <SignUp />,
  },
  {
    type: "branch",
    branch: "All Branch",
    name: "Branch",
    key: "branch",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/branch",
    component: <Tables />,
  },
  {
    type: "branchform",                                       
    branch: "branchform",
    name: "branch",
    key: "branchform",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/branch2Dates",
    component: <StartedData />,
  },
  {
    type: "branchstatus",                                       
    branch: "branchstatus",           
    key: "branchstatus",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/branchstatus",
    component: < BranchStatus />,
  },
  {
    type: " batchwings",                                       
    branch: " batchwings",            
    name: "branch",
    key: " batchwings",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/batchwings",
    component: <  BatchWings />,
  },
  {
    type: " branchdetails",                                       
    branch: " branchdetails",            
    name: "branch",
    key: " branchdetails",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/branchdetails",
    component: <BranchDetails />,
  },
  // {
  //   type: "collapse",
  //   name: "RTL",
  //   key: "rtl",
  //   icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
  //   route: "/rtl",
  //   component: <RTL />,
  // },
  {
    type: "event",
    name: "Event",
    key: "allevents",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/allEvents",
    component: <AllEvents/>,
  },

  {
    type: "event1",
    name: "Event1",
    key: "Event1",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/numberOfNamaskar",
    component: <NumberOfNamaskar />,
  },
  {
    type: "valaya",
    name: "Valaya",
    key: "Valaya",
    icon: <BusinessIcon/>,
    route: "/valaya",
    component: <Valaya/>,
  },
  {
    type: "yogabandhus",
    name: "Yoga Bandhus",
    key: "profile",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  // {
  //   type: "collapse",
  //   name: "Sign In",
  //   key: "sign-in",
  //   icon: <Icon fontSize="small">login</Icon>,
  //   route: "/authentication/sign-in",
  //   component: <SignIn />,
  // },
  // {
  //   type: "collapse",
  //   name: "Sign Up",
  //   key: "sign-up",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "/authentication/sign-up",
  //   component: <Billing />,
  // },
];

export default routes;
