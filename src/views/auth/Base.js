import React, { useState } from "react";
import axios from "axios";
import Register from "./Register";
import Image from '../../assets/img/Saly-10.png'
import Logo from '../../assets/img/logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
class AuthBase extends React.Component {
    render() {
        return(
            <div className=" bg-hero-pattern bg-cover  sm:max-w-xl sm:p-32 md:max-w-full  md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center mx-auto">
        {/* <img src={Image} className="max-h-96 object-contain" alt="Logo" /> */}
          <div className=" mx-auto mb-6 "> 
          <img class="w-2/3 mx-auto content-center" src={Logo} alt="Logo"/>
          <br/>
              <h2 className="text-center text-white  text-xl font-bold md:text-lg">
                Welcome to WebSkool
              
            </h2>
            <p className="text-base text-center text-white md:text-lg">
              A Digital School To make Learning Digital
            </p>
          </div>
          
          {/* <a
            href="/auth/login"
            aria-label=""
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                SignIn
            </button>
          </a> */}
        </div>
        <div className="relative">
        <div className="flex-auto px-4 lg:px-10  pt-0">
                
        <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
        {this.props.children}
        </div>
      </div>
              </div>
        </div>
      </div>
    </div>
      
    

  );}
  }

export default AuthBase;