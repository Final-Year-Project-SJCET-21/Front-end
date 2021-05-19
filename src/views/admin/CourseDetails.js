import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

// components
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";

// views

import Dashboard from "./Dashboard.js";
import { useState } from "react";

export default function CourseDetails(props) {
  const [isSucess, setisSucess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const id = props.history.location.state.roomid;
  const [token, setToken] = React.useState(
    localStorage.getItem('key') || ''
  );
  console.log(id);
  if (isLoaded == false) {
    axios
      .get(
        `https://project-api.fenstrok.com/api/clasroom/${id}`,
        {},
        {
          headers: {
            // 'Authorization': `Token ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        setIsLoaded(true);
        setItems(response.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  }

  const handleDelete=(evt)=>{
    
    evt.preventDefault();
    
    axios
      .delete(`https://project-api.fenstrok.com/api/clasroom/${id}/`, {
        
          
        
                
      },{
        headers: {
            'Authorization': `Token ${token}`,
            
          },
        }
      
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!");

        
        setisSucess(true);
        alert("success");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  }

  return (
    <>
      <div className="relative  bg-blueGray-100">
        <AdminNavbar />

        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="relative flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 shadow-lg rounded-lg">
                <div className=" flex flex-col flex-wrap  float-right pt-5 px-5">
                  <div className="flex flex-row float-right ">
                    <button
                      className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                      type="button"
                      // onClick={()=>{props.history.push("/addcourse", { token: props.token });}}
                    >
                      <h1 className="">View Attendance</h1>
                    </button>

                    <div class="flex flex-row  items-center justify-center bg-grey-lighter">
                      <label class=" flex flex-row items-center justify-center px-3 py-2 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide border border-indigo-500 cursor-pointer hover:bg-indigo-500 hover:text-white">
                        <svg
                          class="w-8 h-8"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                        </svg>
                        <span class=" mx-2 text-sm font-semibold ">
                          Upload a file
                        </span>
                        <input type="file" class="hidden" />
                      </label>
                    </div>
                    <button
                      className="border border-red-700 text-red-700 active:bg-blueGray-600 text-sm font-bold  px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleDelete}
                    >
                      Delete
                    </button>
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
                              {items.room_name}
                            </p>
                            <div className="flex items-baseline space-x-4">
                              <h2 className="text-l font-semibold">
                                57 Students Enrolled
                              </h2>
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={()=>{props.history.push("/enrolledstudents", { roomid: id });}}
                          className="w-full block p-3 text-l font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer"
                        >
                          View all
                        </button>
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
