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


export default function FaceApi() {
  const height=480;
  const width=640;

  const [initializing, setInitializing] = useState(false);
  const [active, setActive] = useState("");
  const videoRef = useRef();
  const canvaRef = useRef();

  useEffect(()=>{
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
    setInterval(async()=>{
      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      // const resizedDetections = faceapi.resizeResults(detections, displaySize)
      // canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
      // faceapi.draw.drawDetections(canvas, resizedDetections)
      // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
      // faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
      if(detections.length>0){
        setActive("Active");
      }else{
        setActive("Not Active");
      }
      console.log(detections.length);
    },100)
  }


  return (
    <div className="App">
      <span>{active}</span>
      <video ref={videoRef} autoPlay muted height={height} width={width} onPlay={handleVideoPlay}/>
      <canva ref = {canvaRef}/>
    </div>
  );
}


