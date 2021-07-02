import React, { useState } from "react";


/* This example requires Tailwind CSS v2.0+ */
export default function Avatar(props) {
  return (
    <>
      
        <div class="flex flex-col w-full space-y-6">
          <div class="flex pt-2">
            <img
              class="w-8 h-8 rounded-full border-4 border-white"
              src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
              alt=""
            />
            <img
              class="w-8 h-8 rounded-full border-4 border-white -ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV4IK-BKnJsoA1FAWpS6ww8eyZERNzzVEuQ&usqp=CAU"
              alt=""
            />
            <img
              class="w-8 h-8 rounded-full border-4 border-white -ml-4"
              src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png"
              alt=""
            />
            <img
              class="w-8 h-8 rounded-full border-4 border-white -ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkV4IK-BKnJsoA1FAWpS6ww8eyZERNzzVEuQ&usqp=CAU"
              alt=""
            />
            
          </div>
        </div>

        
    </>
  );
}
