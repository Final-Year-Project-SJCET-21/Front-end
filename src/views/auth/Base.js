// Base Template For Authentication Pages
//  Login Page
//  Register Page 
//Are inherited from this base template 
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";


class AuthBase extends React.Component {
  render() {
    return (
      <div className="flex flex-warp bg-hero-pattern bg-cover  h-screen content-center">
        <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center ">
            <div className=" mx-auto mb-6 ">
              <img class="w-2/3 mx-auto content-center" src={Logo} alt="Logo" />
              <p className="text-base text-center text-white md:text-lg">
                A Digital School To make Learning Digital
              </p>
            </div>
          </div>
          <div className="flex flex-warp  justify-center items-center content-center">
            {/* <div className="flex-auto px-4 lg:px-10  pt-0"> */}
              {/* <div className="container mx-auto px-4 h-full"> */}
                {/* <div className="flex flex-warp content-center items-center justify-center  "> */}
                  {this.props.children}
                </div>
              {/* </div> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default AuthBase;
