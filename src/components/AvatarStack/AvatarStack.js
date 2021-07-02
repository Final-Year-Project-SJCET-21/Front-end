import React, { useState } from "react";
import Avatar from "./Avatar"
import axios from "axios";

/* This example requires Tailwind CSS v2.0+ */
export default function AvatarStack(props) {
  return (
    <>
      <div className="flex flex-col justify-items-center text-center align-middle items-center -space-x-2 overflow-hidden border border-gray-100 rounded-lg">
        <div class="flex flex-col items-center justify-center w-full space-y-6">
          <div class="flex pt-5">
            <img
              class="w-12 h-12 rounded-full border-4 border-white"
              src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
              alt=""
            />
            <img
              class="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV4IK-BKnJsoA1FAWpS6ww8eyZERNzzVEuQ&usqp=CAU"
              alt=""
            />
            <img
              class="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
              alt=""
            />
            <img
              class="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV4IK-BKnJsoA1FAWpS6ww8eyZERNzzVEuQ&usqp=CAU"
              alt=""
            />
            <span class="flex items-center justify-center font-semibold text-gray-600 w-12 h-12 rounded-full bg-gray-200 border-4 border-white -ml-4">
              +3
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center py-5">
          <p className="text-gray-500 font-semibold text-sm">Enrolled Students</p>
          <div className="flex items-baseline space-x-4">
            <h2 className="text-l font-semibold">{props.courseName}</h2>
          </div>
        </div>
        <button
             onClick={()=>{props.history.push("/enrolledstudents", { roomid: props.roomId });}}
          className="w-full block p-3 text-l font-semibold bg-indigo-50 text-indigo-500 hover:bg-indigo-100 cursor-pointer"
        >
          View all
        </button>
      </div>
    </>
  );
}
