import React from "react";
import axios from "axios";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddCourseForm from "../../components/Forms/AddCourseForm.js";

import CourseCard from '../../components/Cards/CourseCard.js';
import AddCourse from "./AddCourse.js";

import coursecover1 from "../../assets/img/coursecover1.jpg";
import coursecover2 from "../../assets/img/coursecover2.png";
import coursecover3 from "../../assets/img/coursecover3.png";

import coursecover5 from "../../assets/img/coursecover5.png";
import coursecover6 from "../../assets/img/coursecover6.png";
import coursecover7 from "../../assets/img/coursecover7.png";
import coursecover8 from "../../assets/img/coursecover8.jpg";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function CheckTeacherOrStudent(props) {

  const url="https://project-api.fenstrok.com/api/clasroom/";
  
    const [role, setroleData] = React.useState(
        localStorage.getItem('role') || ''
      );
      const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const token = props.token;

  var coursecover = [
    coursecover8,
    coursecover2,
    coursecover3,
    coursecover5,
    coursecover6,
    coursecover7,
    coursecover1,

    
    
  ];
  var i=0;

  if(isLoaded==false){
    axios
    .get("https://project-api.fenstrok.com/api/clasroom/", {
      headers: {
        // Authorization: `Token ${token}`,
        
      },
    })
    .then((response) => {
      // Handle success.
      setIsLoaded(true);
      setItems(response.data);
      console.log("Data: ", response.data);
    })
    .catch((error) => {
      // Handle error.
      console.log("An error occurred:", error.response);
    });
  }
  return (
    <>
    <AdminNavbar />

    <HeaderStats />
    <div className="relative  bg-blueGray-100">
        
        <div className="px-10 md:px-10 mx-auto w-full -m-24 mb-6">
          <div className="flex flex-wrap"></div>
          <div className="w-full  px-4">
            <div className="relative -mt-10 flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 border border-gray-200 rounded-lg pb-20">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
              {role=="T"?(
          <AddCourseForm
          name="Course Name"
          filename="Cover Photo"
          showUpload= {false}
                
                url= {url}
                namefield="room_name"
          />
      ):
      <div class="px-6 py-5">
      
              <div className="flex flex-wrap mx-auto">
                {items.map((item) => (
                  
                  <div className="focus:outline-none m-4 my-6 "
                  
                  >
                    <div className="">
                    
                
                    <CourseCard
                      history={props.history}
                      statTitle={item.room_name}
                      statSubtitle={item.created_by}
                      coursecover={coursecover[(i>6)?i=0:i++]}
                      id={item.id}
                      showButton={true}
                    />
                   
                  </div>
                  </div>
                ))}
              </div>
            </div>
      }
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
      <FooterAdmin/>
    </>
  );
}
