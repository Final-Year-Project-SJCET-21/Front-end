import React, { useState } from "react";
import PropTypes from "prop-types";


export default function AttendanceClassCard({
 classNumber,
 date,
 history 
 
}) {
  

  

  

  return (
    <>
    <div class="container flex flex-col mx-auto w-full items-center justify-center">
    <ul class="flex flex-col">
        <li class="border-gray-400 flex flex-row mb-2">
        

          
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                
                <div class="flex-1 pl-1 md:mr-16 text-left">
                    <div class="font-medium dark:text-white">
                        Class {classNumber}
                    </div>
                    
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    {date}
                </div>
                
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                
            </div>
           
        </li>
        
        
    </ul>
</div>
      
    </>
  );
}

AttendanceClassCard.defaultProps = {
  // statSubtitle: "Traffic",
  // statTitle: "350,897",
  // statArrow: "up",
  // statPercent: "3.48",
  // statPercentColor: "text-emerald-500",
  // statDescripiron: "Since last month",
  // statIconName: "far fa-chart-bar",
  // statIconColor: "bg-red-500",
};

AttendanceClassCard.propTypes = {
  classNumber: PropTypes.string,
  date: PropTypes.string,
  history: PropTypes.any,
  
 
 
};




