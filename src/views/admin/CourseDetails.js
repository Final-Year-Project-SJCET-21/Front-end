import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom";

// components
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import ModuleCard from "../../components/Cards/ModuleCard";
import AvatarStack from "../../components/AvatarStack/AvatarStack";
import db from "../../firebaseconfig";

// views

import Dashboard from "./Dashboard.js";
import { useState, useEffect } from "react";

export default function CourseDetails(props) {
  let history = useHistory();
  const [isSucess, setisSucess] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isCourseActive, setIsCourseActive] = useState(false);
  const [courseData, setCourseData] = useState([]);
  const [modules, setModules] = useState([]);
  const [data, setData] = useState([]);

  const [activeId, setActiveId] = useState("");
  const id = props.history.location.state.roomid;
  const [token, setToken] = React.useState(localStorage.getItem("key") || "");
  const [role, setroleData] = React.useState(
    localStorage.getItem("role") || ""
  );
  const ref = db.collection("courseActive");
  // console.log(id);

  //REALTIME GET FUNCTION
  function getData() {
    // console.log(courseName.room_name);
    if (courseData.room_name) {
      ref
        .where("coursename", "==", courseData.room_name)
        .where("isactive", "==", "true")
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setData(items);

          // setLoading(false);
        });
    }
  }

  useEffect(() => {
    if (isLoaded === true) {
      getData();
    }
    data &&
      data.map((data) => {
        if (data.isactive === "true") {
          // console.log("Machine learning is active");
          setActiveId(data.id);
          setIsCourseActive(true);
        }
      });

    if (isLoaded === false) {
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
            setCourseData(classroomRes.data);
            setModules(moduleRes.data);
          })
        )
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error);
        });
    }
  });
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
              <div className="relative -mt-10 flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 border border-gray-200 rounded-lg pb-20">
                <div className=" flex flex-col flex-wrap  justify-items-center align-middle items-center pt-10 px-5">
                  {role === "T" ? (
                    <div className="flex flex-row float-right ">
                      {isCourseActive ? (
                        <button
                          className=" max-auto   bg-blue-700 text-white active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white"
                          type="button"
                          onClick={() => {
                            props.history.push("/videocall", {
                              courseName: courseData.room_name,
                              courseId: courseData.id,
                              activeId: activeId,
                            });
                          }}
                        >
                          {" "}
                          Join Video Call
                        </button>
                      ) : (
                        <button
                          className=" max-auto  border border-blue-700 text-blue-700 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white"
                          type="button"
                          onClick={() => {
                            props.history.push("/videocall", {
                              courseName: courseData.room_name,
                              courseId: courseData.id,
                              activeId: activeId,
                            });
                          }}
                        >
                          {" "}
                          Start Video Call
                        </button>
                      )}
                      <button
                        className=" max-auto  border border-blue-700 text-blue-700 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white"
                        type="button"
                        onClick={() => {
                          props.history.push("/attendance", {
                            token: props.token,
                          });
                        }}
                      >
                        <h1 className="">View Attendance</h1>
                      </button>
                      <button
                        className=" max-auto  border border-blue-700 text-blue-700 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white"
                        type="button"
                        onClick={() => {
                          props.history.push("/addfolder", { classroomid: id });
                        }}
                      >
                        <div className="flex flex-row justify-items-center justify-center align-middle items-center">
                          <h1 className="pl-2">Create New Folder</h1>
                        </div>
                      </button>
                      <button
                        className=" bg-red-700 text-white active:bg-blueGray-600 text-sm font-bold  px-3  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-red-700 hover:text-white "
                        type="button"
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </div>
                  ) : (
                    <div>
                      {isCourseActive ? (
                        <button
                          className=" max-auto  border border-blue-700 text-blue-700 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-blue-700 hover:text-white"
                          type="button"
                          onClick={() => {
                            props.history.push("/videocall", {
                              courseName: courseData.room_name,
                              courseId: courseData.id,
                              activeId: activeId,
                            });
                          }}
                        >
                          {" "}
                          Join Video Call
                        </button>
                      ) : (
                        <div></div>
                      )}
                    </div>
                  )}
                </div>

                <div className=" flex items-center justify-center ">
                  <div className="bg-white p-4 rounded w-full">
                    <div className=" max-w-2xl mt-4 mx-auto">
                      <AvatarStack
                        courseName={courseData.room_name}
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
