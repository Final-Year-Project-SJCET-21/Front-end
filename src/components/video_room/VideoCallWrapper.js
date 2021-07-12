import React, { useState, useEffect } from 'react'

import { Jutsu } from 'react-jutsu'
import FaceApi from '../Face/Face'
import axios from "axios";
import db from '../../firebaseconfig';
import VideoRoomComponent from './components/VideoRoomComponent';
import { useHistory } from 'react-router-dom'
import { v4 as uuidv4 } from "uuid";

export default function VideoCallWrapper (props){
  var today = new Date(),
  date = today.getDate() +'-'+(today.getMonth() + 1) + '-'  +today.getFullYear();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  var second = today.getSeconds();
  var minute = today.getMinutes();
  var hours = today.getHours();
  const room=props.history.location.state.courseName;
  // let activeClassId=props.history.location.state.activeId;
  const [activeClassId, setactiveClassId] = useState(props.history.location.state.activeId);
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
  const [ locationKeys, setLocationKeys ] = useState([])
const history = useHistory()
  
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
    console.log(second);
    // studentExist();
    

    if(role==="T"&&!activeClassId){
      
      addClass({coursename: room, id:classId, isactive: "true", date: date})
      setactiveClassId(classId)
     
    }
    if(role==="S"){
      studentExist().then((data)=>{ 
        if(data == null || data.length === 0) 
        addStudent({classid: activeClassId, coursename: room, id:studentId, name: name, isactive: false, userid: userId, startingtime: time, onlineseconds: 0, startingsecond: second, startingminute: minute, startinghour:hours})
     
      });
      
      
    }
    console.log(activeClassId); 
    // return history.listen(location => {
    //   if (history.action === 'PUSH') {
    //     setLocationKeys([ location.key ])
    //   }
  
    //   if (history.action === 'POP') {
    //     if (locationKeys[1] === location.key) {
    //       setLocationKeys(([ _, ...keys ]) => keys)
  
    //       // Handle forward event
    //         alert("forward")
    //     } else {
    //       setLocationKeys((keys) => [ location.key, ...keys ])
  
    //       // Handle back event
    //       alert("back")
  
    //     }
    //   }
    // })
     
  }, [])

  
  return (
    <div>
      <div className="relative  bg-gray-900 py-10 h-screen">
        
        {(role==="S")?(<FaceApi classRoom={room} id={id} classid={activeClassId} />): (
          <div></div>
        )}
        <VideoRoomComponent
          openviduServerUrl="https://video.fenstrok.com"
          openviduSecret="justin_123"
          activeClassId={activeClassId}
          // sessionName = {classId}
          user ={name}
          courseId = {id}
          role = {role}
          studentId={studentId}
          history={props.history}
        />
        
      </div>
    </div>
  );
}


