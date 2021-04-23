import React from "react";
import { Switch, Route, Redirect, Router, withRouter } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";

// views

import Login from "../views/auth/Login.js";
import Register from "../views/auth/Register.js";

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-20 pb-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-gradient-to-r from-indigo-500 to-blue-500  bg-no-repeat bg-full"
            
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={withRouter(Register)} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
         
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
