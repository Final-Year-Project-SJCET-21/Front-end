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
        
        
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className=" flex flex-wrap items-center">
              <div className=" relative flex flex-row items-center content-center justify-center justify-items-center align-middle">
              <button
                      className=" bg-blue-900 text-white active:bg-blueGray-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={()=>{props.history.push("/addcourse", { token: props.token });}}
                    >
                      Add Course
                    </button>
              </div>
            </div>
          </div>
          
          
          <div className="p-4 flex-auto">
          
            <CardProfile token={props.token} history={props.history}/>
            
            
           
            
            
          </div>
        </div>
        
      
    </>
  );
}
