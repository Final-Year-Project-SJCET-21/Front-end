import React from "react";
import notfound from "../assets/img/notfound.png"

export default function NoResult(props) {

  
  
  return (
    <>
      <div className="flex flex-col w-full h-full justify-items-center justify-center align-middle items-center">
      <img className="pt-20 w-1/3 " src={notfound}/>
      <h1 className="text-sm font-semibold  p-6 text-gray-700 ">No Results found</h1>
      </div>
    </>
  );
}
