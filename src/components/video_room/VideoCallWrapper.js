import React, { useState, useEffect } from 'react'

import { Jutsu } from 'react-jutsu'
import Face from '../Face/Face'
import axios from "axios";

import VideoRoomComponent from './components/VideoRoomComponent';

export default function VideoCallWrapper (props){
  // const room=props.history.location.state.courseName;
  // const id=props.history.location.state.courseId;
  const [name, setName] = React.useState(
    localStorage.getItem("username") || ""
  );
  const [role, setRole] = React.useState(
    localStorage.getItem("role") || ""
  );
  const [userId, setUserId] = React.useState(
    localStorage.getItem("userid") || ""
  );
  const [call, setCall] = useState(false)
  
  const [password, setPassword] = useState('')
  const [classId, setroleclassId] = React.useState(
    localStorage.getItem("classId") || ""
  );
  // const [username, setusernameData] = React.useState(
  //   localStorage.getItem("username") || ""
  // );
  
  // useEffect(()=>{
  //   console.log(classId);
  //   if(role==="T" && classId===""){
  //     axios
  //     .post("https://raptorlogin.santhoshthomas.xyz/login/add_class", {
       
  //       courseId: id,
  //     })
  //     .then((response) => {
  //       // Handle success.
        
        
  //       // setClassId(response.data.classId);
  //       console.log(classId);
  //       localStorage.setItem("classId", response.data.classId);
        
  //     })
  //     .catch((error) => {
  //       // Handle error.
  //       console.log("An error occurred:", error.response);
  //       alert("Error");
  //     });
  //   }
  //   if(classId!==""){
  //     axios
  //     .post("https://raptorlogin.santhoshthomas.xyz/login/add_student", {
       
  //       classId: "93bfb45099d842c89d8c8222a6cb9c70",
  //       courseId: 15,
  //       studentId: 2,
  //       studentName: "name",

  //     })
  //     .then((response) => {
  //       // Handle success.
        
        
  //       // setClassId(response.data.classId);
  //       console.log(response.data);
  //       // localStorage.setItem("classId", response.data.classId);
        
  //     })
  //     .catch((error) => {
  //       // Handle error.
  //       console.log("An error occurred:", error.response);
  //       alert("Error");
  //     });
  //   }


  // })

  // const handleClick = event => {
  //   event.preventDefault()
  //   if (room && name) setCall(true)
  // }

  return (
    <div>
      <div className="relative  bg-gray-900 py-10 h-screen">
        {/* <div className="px-4 md:px-10 mx-auto w-full ">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="flex flex-col justify-items-center justify-center align-middle items-center min-w-0 min-h-full break-words bg-white w-full mb-6 shadow-lg rounded-lg p-20">
               

                <div> */}
                  {/* <Face 
        classRoom = {room}
        id ={id}
        /> */}
                  <VideoRoomComponent
                    openviduServerUrl="https://video.fenstrok.com"
                    openviduSecret="justin_123"
                  />
                {/* </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}


