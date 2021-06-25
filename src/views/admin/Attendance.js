/* This example requires Tailwind CSS v2.0+ */
import React from "react";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddCourseForm from "../../components/Forms/AddCourseForm";


  
  export default function Attendance(props) {
    return (
        <div className="relative  bg-blueGray-100">
        <AdminNavbar />
  
  <HeaderStats />
          <div className="px-10 md:px-10 mx-auto w-full -m-24 mb-6">
            <div className="flex flex-wrap"></div>
            <div className="w-full  px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-10 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  
<div class="container flex flex-col mx-auto w-full items-center justify-center">
    <ul class="flex flex-col">
        <li class="border-gray-400 flex flex-row mb-2">
        <button onClick={() => {
                  props.history.push("/detailedattendance", );
                }}>

          
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                
                <div class="flex-1 pl-1 md:mr-16 text-left">
                    <div class="font-medium dark:text-white">
                        Class 1
                    </div>
                    
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    23-6-2021
                </div>
                <button class="w-24 text-right flex justify-end"
                
                >
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
            </button>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
        <button onClick={() => {
                  props.history.push("/detailedattendance", );
                }}>

          
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                
                <div class="flex-1 pl-1 md:mr-16 text-left">
                    <div class="font-medium dark:text-white">
                        Class 2
                    </div>
                    
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    23-6-2021
                </div>
                <button class="w-24 text-right flex justify-end"
                
                >
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
            </button>
        </li>
        <li class="border-gray-400 flex flex-row mb-2">
        <button onClick={() => {
                  props.history.push("/detailedattendance", );
                }}>

          
            <div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
                
                <div class="flex-1 pl-1 md:mr-16 text-left">
                    <div class="font-medium dark:text-white">
                        Class 3
                    </div>
                    
                </div>
                <div class="text-gray-600 dark:text-gray-200 text-xs">
                    23-6-2021
                </div>
                <button class="w-24 text-right flex justify-end"
                
                >
                    <svg width="12" fill="currentColor" height="12" class="hover:text-gray-800 dark:hover:text-white dark:text-gray-200 text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z">
                        </path>
                    </svg>
                </button>
            </div>
            </button>
        </li>
        
    </ul>
</div>

      
      </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  