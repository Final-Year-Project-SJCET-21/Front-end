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
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold"></h6>
                <h2 className="text-blueGray-700 text-xl font-semibold"></h2>
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
