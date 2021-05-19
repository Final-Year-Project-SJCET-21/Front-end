import React from "react";
import axios from "axios";

// components

export default function StudentListCard(props) {
  return (
    <>
      <div class="flex items-center justify-center py-10">
        <div class="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-3xl md:flex-row border border-gray-100">
          <div class=" md:-my-16 md:-ml-32 rounded-full">
            <img
              class="w-auto h-24 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV4IK-BKnJsoA1FAWpS6ww8eyZERNzzVEuQ&usqp=CAU"
              alt="Name"
            />
          </div>
          <div class="flex flex-col space-y-4 px-10">
            <div class="flex flex-col items-center md:items-start">
              <h2 class="text-lg font-medium">Student Name :{props.name}</h2>
              <p class="text-sm font-medium text-gray-400">Student Id : {props.id}</p>
            </div>
            
          </div>
        </div>

        
      </div>
    </>
  );
}
