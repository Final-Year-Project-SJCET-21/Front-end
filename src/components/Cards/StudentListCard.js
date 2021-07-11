import React from "react";
import axios from "axios";

// components

export default function StudentListCard(props) {
  return (
    <>
      <div class="flex items-center justify-center py-5">
        <div class="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-3xl md:flex-row border border-gray-100">
          <div class=" md:-my-16 md:-ml-32 rounded-full">
            <img
              class="w-auto h-20 rounded-full"
              src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
              alt="Name"
            />
          </div>
          <div class="flex flex-col  px-12">
            <div class="inline items-center md:items-start">
              <h2 class="text-base font-medium text-gray-700">Student Name : </h2>
              <p class="text-lg font-medium "> {props.name}</p>
            </div>
            
          </div>
        </div>

        
      </div>
    </>
  );
}
