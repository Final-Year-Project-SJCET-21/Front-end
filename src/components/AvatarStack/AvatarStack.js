import React, { useState } from "react";

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
              src="https://images.generated.photos/syc9o2f_obuIoFJBYnGFwnKNNz9LrnKDZcIfhnclJXM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0OTMwMzBfMDA2/MzYzNl8wMTU5Nzkx/LmpwZw.jpg"
              alt=""
            />
            <img
              class="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/ADbBAzeK5oWF2oDJWfZ2-Wq3TBjqex-dxZVQGD5LPJY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMzk2ODBfMDUz/NjY1Nl8wNzAxMDQ2/LmpwZw.jpg"
              alt=""
            />
            <img
              class="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/XML68W6_tNAx4BhHYZSLpszf-vb6NDpjShMIzYaA3iU/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA0NzY1MjkuanBn.jpg"
              alt=""
            />
            <img
              class="w-12 h-12 rounded-full border-4 border-white -ml-4"
              src="https://images.generated.photos/Z5HfwR5L8Fez5uCqEcj3SbogJgJhBdfxJs73ZRGjWgE/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAwNzc4NzAuanBn.jpg"
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
          className="w-full block p-3 text-l font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer"
        >
          View all
        </button>
      </div>
    </>
  );
}
