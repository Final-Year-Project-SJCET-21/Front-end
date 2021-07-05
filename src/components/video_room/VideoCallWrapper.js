import React, { useState, useEffect } from 'react'

import { Jutsu } from 'react-jutsu'
import Face from '../Face/Face'
import axios from "axios";
import db from '../../firebaseconfig';
import VideoRoomComponent from './components/VideoRoomComponent';
import { v4 as uuidv4 } from "uuid";

export default function VideoCallWrapper (props){
  var today = new Date(),
  date = today.getDate() +'-'+(today.getMonth() + 1) + '-'  +today.getFullYear();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  const room=props.history.location.state.courseName;
  const activeClassId=props.history.location.state.activeId;
  const id=props.history.location.state.courseId;
  const [exist, setExist] = useState(true);
  const [name, setName] = React.useState(
    localStorage.getItem("username") || ""
  );
  const [role, setRole] = React.useState(
    localStorage.getItem("role") || ""
  );
  const [userId, setUserId] = React.useState(
    localStorage.getItem("userid") || ""
  );
  
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
    
    
    const test = studentRef.where("classid","==",activeClassId).where("userid","==",userId).get().then((item) => {
    let items = item.docs.map((doc) => doc.data());
      
      
      
      return items;
    });
    return test;
  }

  
  
  useEffect(()=>{
    
    console.log(activeClassId);
    console.log(userId);
    // studentExist();
    
    if(role==="T"&&!activeClassId){
      
      addClass({coursename: room, id:classId, isactive: "true", date: date})
      
    }
    if(role==="S"){
      studentExist().then((data)=>{ 
        if(data == null || data.length === 0) 
        addStudent({classid: activeClassId, coursename: room, id:studentId, name: name, isactive: false, userid: userId, startingtime: time})
     
      });
      
      
    }
  })

  
  return (
    <div>
      <div className="relative  bg-gray-900 py-10 h-screen">
        {/* <div className="px-4 md:px-10 mx-auto w-full ">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="flex flex-col justify-items-center justify-center align-middle items-center min-w-0 min-h-full break-words bg-white w-full mb-6 shadow-lg rounded-lg p-20">
               

                <div> */}
        {/* <Face classRoom={room} id={id} classid={activeClassId} />
        <VideoRoomComponent
          openviduServerUrl="https://video.fenstrok.com"
          openviduSecret="justin_123"
          activeClassId={activeClassId}
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


