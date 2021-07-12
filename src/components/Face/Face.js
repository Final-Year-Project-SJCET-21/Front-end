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

import React, { useState, useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import { io } from "socket.io-client";
import db from "../../firebaseconfig";

export default function FaceApi(props) {
  const height = 0;
  const width = 0;
  var seconds = 0;
  var choice = "false";

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
  const classId = props.classid;
  const [data, setData] = useState();

  var state;
  // const socket = io("ws://localhost:8080");
  // const socket = io("https://raptorlogin.santhoshthomas.xyz/student_active");
  const studentRef = db.collection("students");

  function getData() {
    // console.log(courseName.room_name);

    studentRef
      .where("classid", "==", classId)
      .where("userid", "==", userId)
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
          console.log(doc.id);
          setData(doc.id);
        });
        // setData(items);
        // setLoading(false);
      });
  }

  function edit(updatedData) {
    studentRef
      .doc(updatedData.id)
      .update(updatedData)
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    // console.log(classId);
    getData();
    console.log(data);
    const loadModels = async () => {
      const MODEl_URL = process.env.PUBLIC_URL + "/models";
      setInitializing(true);
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri(MODEl_URL),
        faceapi.nets.faceLandmark68Net.loadFromUri(MODEl_URL),
        // faceapi.nets.faceRecognitionNet.loadFromUri(MODEl_URL),
        // faceapi.nets.faceExpressionNet.loadFromUri(MODEl_URL),
      ]).then(startVideo);
    };
    loadModels();
  }, []);

  const startVideo = () => {
    navigator.getUserMedia(
      {
        video: {},
      },
      (stream) => (videoRef.current.srcObject = stream),
      (err) => console.log(err)
    );
  };

  const handleVideoPlay = () => {
    // socket.emit("message", active);
    setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
      // const resizedDetections = faceapi.resizeResults(detections, displaySize)
      // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      // faceapi.draw.drawDetections(canvas, resizedDetections)
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      if (detections.length > 0) {
        
        state = true;
        seconds = seconds + 1;
      } else {
        
        state = false;
      }

      // console.log(userId);
      console.log(state);
      console.log(seconds);
      edit({ id: data, isactive: state, onlineseconds: seconds });
    }, 1000); 
  };

  return (
    <div className=" absolute z-0">
      <span>{active}</span>
      <video
        ref={videoRef}
        autoPlay
        muted
        height="0"
        width="0"
        onPlay={handleVideoPlay}
      />
    </div>
  );
}
