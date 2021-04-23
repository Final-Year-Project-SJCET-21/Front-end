import React from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

// components
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";

// views

import Dashboard from "./Dashboard.js";

export default function CourseDetails(props) {
  return (
    <>
      <div className="relative  bg-blueGray-100">
        <AdminNavbar />

        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"></h6>
                      <h2 className="text-blueGray-700 text-xl font-semibold"></h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex-auto">
                  <div className=" flex justify-center items-center">
                    <div className="max-w-2xl bg-white border border-gray-200 p-6 rounded-md tracking-wide ">
                      <div id="header" className="flex">
                        <img
                          alt="mountain"
                          className="w-45 rounded-md border-1 border-gray-100"
                          src="https://picsum.photos/seed/picsum/200"
                        />
                        <div id="body" className="flex flex-col ml-5">
                          <h4 id="name" className="text-xl font-semibold mb-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit
                          </h4>
                          <p id="job" className="text-gray-800 mt-2">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.
                          </p>
                          <div className="flex mt-5">
                            <img
                              alt="avatar"
                              class="w-6 rounded-full border-2 border-gray-300"
                              src="https://picsum.photos/seed/picsum/200"
                            />
                            <p className="ml-3">John Doe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-4"></div>

          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
