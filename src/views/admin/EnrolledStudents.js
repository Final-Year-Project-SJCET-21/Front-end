import React from "react";
import axios from "axios";
import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

// components
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import StudentListCard from "../../components/Cards/StudentListCard.js";

// views

import Dashboard from "./Dashboard.js";
import { useState } from "react";

export default function EnrolledStudents(props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const id = props.history.location.state.roomid;
  const [token, setToken] = React.useState(localStorage.getItem("key") || "");
  var i=0;



  console.log(id);
  if (isLoaded == false) {
    axios
      .get(
        `https://project-api.fenstrok.com/api/clasroom/${id}/enrolled-students/`,
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log(response.data);
        setIsLoaded(true);
        setItems(response.data);
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
            
              <div className="relative -mt-10 flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 border border-gray-200 rounded-lg pb-20">
                  <h1 className="text-sm font-semibold  p-6 text-gray-700">Enrolled Students</h1>
                  <div class="mt-0 ">
              {items.map((item) => (
                  
                 
                    
                    
                    <StudentListCard
                      
                      name={items[i++].student_name}
                    />
                  
                ))}
               
              </div>
            </div>
            </div>
          </div>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
