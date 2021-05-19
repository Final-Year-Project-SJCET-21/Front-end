import React from "react";
import { Switch, Route, Redirect, Router, withRouter } from "react-router-dom";

// components

import Navbar from "../components/Navbars/AuthNavbar.js";
import FooterSmall from "../components/Footers/FooterSmall.js";

// views

import Login from "../views/auth/Login.js";
import Register from "../views/auth/Register.js";

export default function Auth() {
  var role="t";
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="">
          {/* <div
            className="absolute top-0 w-full h-full bg-deep-purple-accent-400  bg-no-repeat bg-full"
            
          ></div>  */}
          <Switch>
            <Route path="/auth/login/"  component={Login} />
            <Route path="/auth/register/:role?"  component={withRouter(Register)} />
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
         
          {/* <FooterSmall absolute /> */}
        </section>
      </main>
    </>
  );
}
