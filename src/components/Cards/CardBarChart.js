import React from "react";
// import Chart from "chart.js";

import axios from "axios";
import CourseDetails from "../../views/admin/CourseDetails";
import CardProfile from "./CardProfile";
import { BrowserRouter, Switch, Route, Redirect, Link,withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';
export default function CardBarChart(props) {

  const history = props.history
 
  return (
    <>
        
        
        <div className="relative flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className=" flex flex-wrap items-center float-right pt-2 px-2">
              <div className=" float-right ">
              <button
                      className=" max-auto border bg-indigo-500 text-black active:bg-blueGray-600   text-sm font-semibold  px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=>{props.history.push("/addcourse", { token: props.token });}}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-white" fill="none" viewBox="0 0 20 24" stroke="#fff">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
              </div>
            </div>
          </div>
          
          
          <div className="-mt-7 flex-auto">
          
            <CardProfile token={props.token} history={props.history}/>
            
            
           
            
            
          </div>
        </div>
        
      
    </>
  );
}
