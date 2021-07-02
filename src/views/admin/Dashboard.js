import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

// components

import CardBarChart from "../../components/Cards/CardBarChart.js";
import CardProfile from "../../components/Cards/CardProfile";
import CourseDetails from "./CourseDetails.js";

export default function Dashboard(props) {
  return (
    <>
        
        
        <div className="flex flex-wrap">
          <div className="w-full ">
            <CardBarChart token={props.token} history={props.history} />
            
          </div>
          
        </div>
        <div className="flex flex-wrap mt-4"></div>
        
        
    </>
  );
}
