import React from "react";
// import { Switch, Route, Redirect, Link } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin.js";

// views

import Dashboard from "../views/admin/Dashboard.js";


export default function Admin(props) {
  // console.log(props.history.location.state.jwt);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        
        <HeaderStats token={props.history.location.state.jwt}/>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
        
          <Dashboard/>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
