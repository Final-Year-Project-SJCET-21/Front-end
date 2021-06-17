// import React, { useState } from 'react'
// import Jitsi from 'react-jitsi'
 
// const roomName = 'my-super-secret-meeting-123e4567-e89b-12d3-a456-426655440000'
// const userFullName = 'Joseph Strawberry'
 
// export  const Face = () => (
//   <>
//     <h2>My First Meeting!</h2>
//     <Jitsi roomName={roomName} displayName={userFullName} />
//   </>
// )

// export default Face


import React, {useState, useEffect, useRef  } from "react";
import * as faceapi from "face-api.js";
import { io } from "socket.io-client";


export default function FaceApi(props) {
  const height=0;
  const width=0;
  var minutes=0;
  var choice="false";

  const [initializing, setInitializing] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [active, setActive] = useState("");
  const [start, setStart] = useState("hgchg");
  const [userId, setUserId] = React.useState(
    localStorage.getItem("userid") || ""
  );
  const [text, setText] = useState();
  
  const [username, setusernameData] = React.useState(
    localStorage.getItem("username") || ""
  );
  const [userDatas, setUserData] = useState("");
  const videoRef = useRef();
  const canvaRef = useRef();
  const room = props.classRoom;
  const id = props.id;
  var state;
  // const socket = io("ws://localhost:8080");
  const socket = io("https://raptorlogin.santhoshthomas.xyz/student_active");
  
  useEffect(()=>{
    console.log(props.classRoom)
    const loadModels =async ()=>{
      const MODEl_URL = process.env.PUBLIC_URL + '/models';
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEl_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEl_URL),
        faceapi.nets.faceRecognitionNet.loadFromUri(MODEl_URL),
        faceapi.nets.faceExpressionNet.loadFromUri(MODEl_URL),
      ]).then(startVideo);
    }
    loadModels()



    // socket.on("connection", () => {
    //   console.log(`I'm connected with the back-end`);
    // });
    // //Join Room

    // // socket.on('join', ({username,room})=>{
    // //   console.log(room);
    // // });
    // socket.emit("join", { username, room });
    
    
    // socket.on("message", (text) => {
    //   console.log(text);
    //   setText(text.text);
    // });


    // socket.on('roomUsers', ({ room, users }) => {
    //   console.log(room);
    //   console.log(users);
    //   // setUserData(users)
    // });
    // socket.on('status', ({ users }) => {
      
    //   console.log(users);
    //   setUserData(users)
    // });
  },[]
  )

  const startVideo=()=>{
    
    navigator.getUserMedia({
      video:{}
    },
    stream=>videoRef.current.srcObject=stream,
    err => console.log(err)
    )
  }
  

  const handleVideoPlay=()=>{
    // socket.emit("message", active);
    setInterval(async()=>{
      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      // const resizedDetections = faceapi.resizeResults(detections, displaySize)
      // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      // faceapi.draw.drawDetections(canvas, resizedDetections)
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      if(detections.length>0 ){
        setActive("Active");

        minutes=minutes+0.00166667;
        props.passActiveTime(minutes);
        
      }else{
        setActive("Not Active");
        state = false;
      }

      console.log(userId);
      console.log(state);
      // socket.emit("message", state); 
      // socket.emit("message", active);
  // setInterval(() => {
  //   socket.emit("message", state);
    
  // }, 0); 
  socket.emit("connect-4", {classId: "93bfb45099d842c89d8c8222a6cb9c70", studentId:2, studentName: username, isActive : state, courseId:15});
    socket.on("connect-5", (data) => {
      console.log(data.class);
    });
    // socket.on("connect-5", (data) => {
    //   console.log(data);
    // });
    socket.on("class", (data) => {
      console.log(data);
    });
      
      // console.log(active);
    },1000)
  }
  // console.log(minutes);
  // socket.emit("message", active);
  // setInterval(() => {
  //   socket.emit("message", minutes);
    
  // }, 1000);

  

  return (
    <div className="App">
      <span>{active}</span>
      <video ref={videoRef} autoPlay muted height={height} width={width} onPlay={handleVideoPlay}/>
      {/* <canva ref = {canvaRef}/> */}
      {/* <button
      onClick={()=>{socket.emit("message", active);}}
      >Start</button> */}
      {/* <br/>
      <button
      onClick={handleClick}
      >Stop</button>
      <h1>{start}</h1> */}


{userDatas?(
        userDatas.map((userData)=>(
          <div>
            <p>{userData.username} is {userData.msg}</p>
          
          </div>
        ))
      ):(<div></div>)}
      
    </div>
  );
}


