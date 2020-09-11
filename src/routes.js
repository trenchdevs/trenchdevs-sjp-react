/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import UserPage from "views/User.js";
import ListAlumniEvents from "./components/AlumniEvents/ListAlumniEvents";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/events",
    name: "Events",
    icon: "nc-icon nc-calendar-60",
    component: ListAlumniEvents,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Alumni",
    icon: "fa fa-users",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "Settings",
    icon: "fa fa-wrench",
    component: UserPage,
    layout: "/admin",
  },
];


export default routes;
