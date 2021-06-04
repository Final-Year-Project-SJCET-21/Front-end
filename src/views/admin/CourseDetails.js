import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

// components
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import ModuleCard from "../../components/Cards/ModuleCard";
import AvatarStack from "../../components/AvatarStack/AvatarStack";

// views

import Dashboard from "./Dashboard.js";
import { useState } from "react";

export default function CourseDetails(props) {
  let history = useHistory();
  const [isSucess, setisSucess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [courseName, setCourseName] = useState([]);
  const [modules, setModules] = useState([]);
  const id = props.history.location.state.roomid;
  const [token, setToken] = React.useState(localStorage.getItem("key") || "");
  const [role, setroleData] = React.useState(
    localStorage.getItem("role") || ""
  );
  console.log(id);

  if (isLoaded == false) {
    axios
      .all([
        axios.get(`https://project-api.fenstrok.com/api/clasroom/${id}`),
        axios.get(
          `https://project-api.fenstrok.com/api/clasroom/${id}/modules/`
        ),
      ])
      .then(
        axios.spread((classroomRes, moduleRes) => {
          // do something with both responses
          console.log("Well done!");
          setIsLoaded(true);
          setCourseName(classroomRes.data);
          setModules(moduleRes.data);
        })
      )
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  }

  // if (isLoaded == false) {
  //   axios
  //     .get(
  //       `https://project-api.fenstrok.com/api/clasroom/${id}`,
  //       {},
  //       {
  //         headers: {
  //           // 'Authorization': `Token ${token}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       // Handle success.
  //       console.log("Well done!");
  //       setIsLoaded(true);
  //       setCourseName(response.data);
  //     })

  //     .catch((error) => {
  //       // Handle error.
  //       console.log("An error occurred:", error);
  //     });
  // }

  // .get(
  //   `https://project-api.fenstrok.com/api/clasroom/${id}/modules/`,
  //   {},
  //   {
  //     headers: {
  //       'Authorization': `Token ${token}`,
  //     },
  //   }
  // )
  // .then((response) => {
  //   // Handle success.
  //   console.log("Well done!");
  //   setIsLoaded(true);
  //   setModule(response.data);
  // })

  const handleDelete = (evt) => {
    evt.preventDefault();

    axios
      .delete(
        `https://project-api.fenstrok.com/api/clasroom/${id}/`,
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

        setisSucess(true);
        alert("success");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  };

  return (
    <>
      <div className="relative  bg-blueGray-100">
        <AdminNavbar />

        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="relative flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 shadow-lg rounded-lg pb-20">
                <div className=" flex flex-col flex-wrap  float-right pt-5 px-5">
                <button
                        className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                        type="button"
                        onClick={() => {
                          props.history.push("/videocall",{ courseName:courseName.room_name  } );
                        }}
                      > Join classroom</button>
                  {role == "T" ? (
                    <div className="flex flex-row float-right ">
                      <button
                        className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                        type="button"
                        // onClick={()=>{props.history.push("/addcourse", { token: props.token });}}
                      >
                        <h1 className="">View Attendance</h1>
                      </button>
                      <button
                        className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                        type="button"
                        onClick={() => {
                          props.history.push("/addfolder", { classroomid: id });
                        }}
                      >
                        <div className="flex flex-row justify-items-center justify-center align-middle items-center">
                          <h1 className="pl-2">Create New Folder</h1>
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div></div>
                  )}
                  {/* <button
                      className="border border-red-700 text-red-700 active:bg-blueGray-600 text-sm font-bold  px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 hover:bg-red-700 hover:text-white"
                      type="button"
                      onClick={handleDelete}
                    >
                      Delete
                    </button> */}
                </div>

                <div className=" flex items-center justify-center ">
                  <div className="bg-white p-4 rounded w-full">
                    <div className=" max-w-2xl mt-4 mx-auto">
                      <AvatarStack
                        courseName={courseName.room_name}
                        roomId={id}
                        history={props.history}
                      />
                      
                    </div>
                  </div>
                </div>
                {modules.map((module) => (
                  <ModuleCard
                    history={props.history}
                    // statTitle={item.room_name}
                    // statSubtitle={item.created_by}
                    // coursecover={coursecover[(i>6)?i=0:i++]}
                    id={id}
                    moduleId={module.id}
                    moduleName={module.module_name}
                  />
                ))}
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
