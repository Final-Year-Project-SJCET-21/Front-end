import React, { useState } from "react";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddCourseForm from "../../components/Forms/AddCourseForm";
import ModuleCard from "../../components/Cards/ModuleCard";
import NoResult from "../../views/NoResult"
import Popup from "reactjs-popup";
import axios from "axios";

export default function Folder(props) {
  const [title, setTitle] = useState("");

  const [file, setFile] = useState();

  const [fileName, setFileName] = useState("");
  const [desc, setDesc] = useState("");

  const [isSucess, setisSucess] = useState(false);

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [errorName, setErrorName] = useState("");
  const [errorDesc, setErrorDesc] = useState("");
  const [items, setItems] = React.useState([]);
  const [token, setToken] = React.useState(localStorage.getItem("key") || "");
  const [role, setroleData] = React.useState(
    localStorage.getItem("role") || ""
  );

  if (isLoaded == false) {
    axios
      .get(
        `https://project-api.fenstrok.com/api/clasroom/${props.history.location.state.roomid}/modules/${props.history.location.state.moduleId}/notes/`,
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle success.
        setIsLoaded(true);
        setItems(response.data);
        console.log("Data: ", response.data);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }
  // const url=`https://project-api.fenstrok.com/api/clasroom/${props.history.location.state.classroomid}/modules/`


  const myChangeHandlerName= (evt)=>{
    let err = '';
    let val = evt.target.value;
    if(val!==""){
      setErrorName("")
      setFileName(evt.target.value)
    }
    else{
      setErrorName("This field cannot be empty")
    }

  }

  const myChangeHandlerDesc= (evt)=>{
    let err = '';
    let val = evt.target.value;
    if(val!==""){
      setErrorDesc("")
      setDesc(evt.target.value)
    }
    else{
      setErrorDesc("This field cannot be empty")
    }

  }
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

  function submitForm(contentType, data, setResponse) {
    axios
      .post({
        url: `https://project-api.fenstrok.com/api/clasroom/${props.history.location.state.roomid}/modules/${props.history.location.state.moduleId}/notes/`,
        method: "POST",
        data: data,
        headers: {
          Authorization: `Token ${token}`,
          "Content-Type": contentType,
        },
      })
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setResponse("error");
      });
  }

  function uploadWithFormData(evt) {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("module", props.history.location.state.moduleId);
    formData.append("filename", fileName);
    formData.append("description", desc);
    formData.append("document", file);


   
    // submitForm("multipart/form-data", formData, (msg) => console.log(msg));
    axios.post(`https://project-api.fenstrok.com/api/clasroom/${props.history.location.state.roomid}/modules/${props.history.location.state.moduleId}/notes/`, 
    formData, 
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    }
    )
      .then(res => { // then print response status
        console.log(res.statusText);
        setIsLoaded(false);
        alert("Upload Successfull")
      })
  }

  

  
  return (
    <>
      <div className="relative  bg-blueGray-100">
        <AdminNavbar />

        <HeaderStats />
        <div className="px-10 md:px-10 mx-auto w-full -m-24 mb-6">
          <div className="flex flex-wrap"></div>
          <div className="w-full  px-4">
            <div className="relative -mt-10 flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 border border-gray-200 rounded-lg pb-20">
              <div className=" flex items-center justify-center ">
                <div className="bg-white p-4 rounded w-full">
                <div className=" flex flex-row justify-between flex-wrap items-center  pt-0 px-2">
            <h1 className="text-sm font-semibold  p-6 text-gray-700">Learning Materials</h1>
              <div className=" float-right ">
              {role==="T"?(
                    <Popup 
                    trigger={<button className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"> 
                    <div className="flex flex-row justify-items-center justify-center items-center">
                    <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        <h1 className="pl-2">Upload</h1>
                    </div>
                    </button>} 
                    position="right center"
                    closeOnDocumentClick
                    modal
                  mouseLeaveDelay={300}
                  mouseEnterDelay={0}
                  contentStyle={{ padding: '0px', border: '2', width: '50%', }}
                  arrow={false}
                  keepTooltipInside
                    >
                    {
                      close=>(
                        <div class=" mx-auto bg-white rounded-lg overflow-hidden  w-full">
                        <div class="md:flex">
                          <div class="w-full px-4 py-6 ">
                            <div class="mb-1">
                              {" "}
                              <span class="text-sm">File name</span>
                              <input
                                type="text"
                                class="h-12 px-3 w-full border-gray-200 border-2 rounded focus:outline-none focus:border-purple-800"
                                onChange={myChangeHandlerName}
                              />{" "}
                              <p className="text-sm text-red-600">{errorName}</p>
                            </div>
                            <div class="mb-1">
                              {" "}
                              <span class="text-sm">Description</span>
                              <textarea
                                type="text"
                                class="h-24 py-1 px-3 w-full border-2 border-gray-200 rounded focus:outline-none focus:border-purple-800 resize-none"
                                onChange={myChangeHandlerDesc}
                              ></textarea>{" "}
                              <p className="text-sm text-red-600">{errorDesc}</p>
                            </div>
                            <div class="mb-1">
                              {" "}
                              {" "}
                            </div>
                            <div>
                            <span class="text-sm text-gray-400">
                                Attach your files
                              </span>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 48 48"
                              aria-hidden="true"
                            >
                              <path
                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className="flex text-sm text-gray-600">
                              <label
                                htmlFor="file-upload"
                                className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="sr-only"
                                  onChange={(e) => setFile(e.target.files[0])}
                                />
                              </label>
                              <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs text-gray-500 text-center">
                              {file != null ? file.name : ""}
                            </p>
                          </div>
                        </div>
                      </div>
                            <div class="mt-3 text-right">
                              {" "}
                              <button
                              className=" max-auto  border border-indigo-500 text-indigo-500 active:bg-blueGray-600   text-sm font-semibold  px-3 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150 hover:bg-indigo-500 hover:text-white"
                              onClick={() => {
                                console.log('modal closed ');
                                close();
                              }}
                              >Close</button>
                              <button 
                              class="ml-2 h-10 w-32 bg-purple-800 rounded text-white hover:bg-indigo-500"
                              onClick={uploadWithFormData}
                              >
                                Create
                              </button>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                      )
                    }
                    </Popup>

                  ):(<div></div>)
                  }
              </div>
            </div>
                  
                </div>
              </div>
              {isEmpty(items)?(<NoResult/>):(
                <div className="rounded-t mb-0 px-4 pb-20 bg-transparent">
                {items.map((item) => (
                  <ModuleCard
                    history={props.history}
                    // id={id}
                    // moduleId={module.id}
                    moduleName={item.filename}
                    description={item.description}
                    url={item.document}
                  />
                ))}
              </div>
              )}
            </div>
          </div>
        </div>
        <FooterAdmin />
      </div>
    </>
  );
}
