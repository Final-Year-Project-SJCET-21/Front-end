import React from "react";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddCourseForm from "../../components/Forms/AddCourseForm";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function AddCourse(props) {
  return (
    <>
      <div className="relative  bg-blueGray-100">
        <AdminNavbar />

        <HeaderStats />
        <div className="px-10 md:px-10 mx-auto w-full -m-24 mb-6">
          <div className="flex flex-wrap"></div>
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                <AddCourseForm token={props.token}/>
              </div>
            </div>
          </div>
        </div>
        <FooterAdmin/>
      </div>
    </>
  );
}
