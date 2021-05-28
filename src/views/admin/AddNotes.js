import React from "react";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddCourseForm from "../../components/Forms/AddCourseForm";


export default function AddNotes(props) {
    
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
                <AddCourseForm
                name="Name"
                filename="Upload Notes"
                classroomid={props.history.location.state.classroomid}

                
                 />
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
