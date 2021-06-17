import React, { useState } from 'react'
import VideoRoomComponent from './components/VideoRoomComponent';
import { Jutsu } from 'react-jutsu'
import Face from '../Face/Face'

export default function VideoCallWrapper (props){
  const room=props.history.location.state.courseName
  const [name, setName] = React.useState(
    localStorage.getItem("username") || ""
  );
  const [call, setCall] = useState(false)
  // const [password, setPassword] = useState('')
  // const [username, setusernameData] = React.useState(
  //   localStorage.getItem("username") || ""
  // );

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return (
    <div>
      <div className="relative  bg-hero-pattern bg-cover py-10 h-screen">
      <div className="px-4 md:px-10 mx-auto w-full ">
          <div className="flex flex-wrap">
            <div className="w-full  px-4">
              <div className="flex flex-col justify-items-center justify-center align-middle items-center min-w-0 min-h-full break-words bg-white w-full mb-6 shadow-lg rounded-lg p-20">
              
      {call ? (
        <div>
        <Face/>
        <VideoRoomComponent openviduServerUrl="https://video.fenstrok.com" openviduSecret="justin_123"/>
        </div>)
        : (
          <form>
            {/* <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} />
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
            <button className="max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white" onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}


