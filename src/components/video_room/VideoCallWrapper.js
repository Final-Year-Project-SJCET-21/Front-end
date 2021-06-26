import React, { useState, useEffect } from 'react'

import { Jutsu } from 'react-jutsu'
import Face from '../Face/Face'
import axios from "axios";
import db from '../../firebaseconfig';
import VideoRoomComponent from './components/VideoRoomComponent';
import { v4 as uuidv4 } from "uuid";

export default function VideoCallWrapper (props){
  const room=props.history.location.state.courseName;
  const activeClassId=props.history.location.state.activeId;
  const id=props.history.location.state.courseId;
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
  const classId= uuidv4();
  var studentId = uuidv4();
  // const [classId, setroleclassId] = React.useState(
  //   localStorage.getItem("classId") || ""
  // );
  // const [username, setusernameData] = React.useState(
  //   localStorage.getItem("username") || ""
  // );
  const ref = db.collection("courseActive");
  const studentRef = db.collection("students");

  function addClass(newData) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
  }
  function addStudent(newData) {
    studentRef
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
  }

  function studentExist() {
    
    
    const snapshot = studentRef
   .where("classid","==",activeClassId).where("userid","==",userId)
   .get();
    if (snapshot.empty) { return false}
    else {return true}
    
  }

  function edit(updatedData) {
    
    ref
      .doc(updatedData.id)
      .update(updatedData)
      .catch((err) => {
        console.error(err);
      });
  }
  
  useEffect(()=>{
    
    console.log(studentExist());
    if(role==="T"&&!activeClassId){
      
      addClass({coursename: room, id:classId, isactive: "true"})
      // axios
      // .post("https://raptorlogin.santhoshthomas.xyz/login/add_class", {
       
      //   courseId: id,
      // })
      // .then((response) => {
      //   // Handle success.
        
        
      //   // setClassId(response.data.classId);
      //   console.log(classId);
      //   localStorage.setItem("classId", response.data.classId);
        
      // })
      // .catch((error) => {
      //   // Handle error.
      //   console.log("An error occurred:", error.response);
      //   alert("Error");
      // });
    }
    if(role==="S"&&!studentExist()){
      
      addStudent({classid: activeClassId, coursename: room, id:studentId, name: name, isactive: false, userid: userId})
      // axios
      // .post("https://raptorlogin.santhoshthomas.xyz/login/add_student", {
       
      //   classId: "93bfb45099d842c89d8c8222a6cb9c70",
      //   courseId: 15,
      //   studentId: 2,
      //   studentName: "name",

      // })
      // .then((response) => {
      //   // Handle success.
        
        
      //   // setClassId(response.data.classId);
      //   console.log(response.data);
      //   // localStorage.setItem("classId", response.data.classId);
        
      // })
      // .catch((error) => {
      //   // Handle error.
      //   console.log("An error occurred:", error.response);
      //   alert("Error");
      // });
    }
  })

  // })

  // const handleClick = event => {
  //   event.preventDefault()
  //   if (room && name) setCall(true)
  // }
// console.log(studentId)
  return (
    <div>
      <div className="relative  bg-gray-900 py-10 h-screen">
        {/* <div className="px-4 md:px-10 mx-auto w-full ">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="flex flex-col justify-items-center justify-center align-middle items-center min-w-0 min-h-full break-words bg-white w-full mb-6 shadow-lg rounded-lg p-20">
               

                <div> */}
                  <Face 
        classRoom = {room}
        id ={id}
        classid= {activeClassId}
        
        />
                  {/* <VideoRoomComponent
                    openviduServerUrl="https://video.fenstrok.com"
                    openviduSecret="justin_123"
                  /> */}
                {/* </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}


