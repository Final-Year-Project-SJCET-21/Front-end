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


export default function FaceApi(props) {
  const height=0;
  const width=0;
  var minutes=0;
  var choice="false";

  const [initializing, setInitializing] = useState(false);
  const [active, setActive] = useState("");
  const [start, setStart] = useState("hgchg");
  
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
  const handleClick=()=>{
    setStart("true"); 
    
    
    if(start=="true"){
      console.log("clicked");
    }
  }

  const handleVideoPlay=()=>{
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
      }

      
      console.log(minutes);
      // console.log(active);
    },100)
  }

  

  return (
    <div className="App">
      <span>{active}</span>
      <video ref={videoRef} autoPlay muted height={height} width={width} onPlay={handleVideoPlay}/>
      <canva ref = {canvaRef}/>
      {/* <button
      onClick={handleClick}
      >Start</button>
      <br/>
      <button
      onClick={handleClick}
      >Stop</button>
      <h1>{start}</h1> */}
      
    </div>
  );
}


