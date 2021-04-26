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
            <div className="w-full  px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"></h6>
                      <h2 className="text-blueGray-700 text-xl font-semibold"></h2>
                    </div>
                  </div>
                </div>

                <div className=" flex items-center justify-center ">
                  <div className="bg-white p-4 rounded w-full">
                    <div className=" max-w-2xl mt-4 mx-auto">
                      <div className=" border rounded-lg">
                        <div className="flex items-center space-x-4 p-4">
                          <div className="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current w-7 h-7"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                            </svg>
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-500 font-semibold text-sm">
                              Data Mining
                            </p>
                            <div className="flex items-baseline space-x-4">
                              <h2 className="text-l font-semibold">
                                Module 1 Notes
                              </h2>
                            </div>
                          </div>
                        </div>
                        <a
                          href="#"
                          className="block p-3 text-l font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer"
                        >
                          Download
                        </a>
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
