import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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

export default function AddCourseForm({
  name,
  details,
  filename,
  classroomid,
  showUpload,
  url,
  namefield,
  descfield
}) {
  console.log(url);

  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();

  const [courseName, setCourseName] = useState("");
  const [email, setEmail] = useState("");

  const [isSucess, setisSucess] = useState(false);

  const [token, setToken] = React.useState(localStorage.getItem("key") || "");
  console.log(token);

  const handlePost = (evt) => {
    console.log(token);
    evt.preventDefault();

    axios
      .post(
        url,
        {
          [namefield]: courseName,
          [descfield]: desc,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!");

        setisSucess(true);
        alert("success");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  };

  

  return (
    <>
      <div className="p-5">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handlePost}>
              <div className=" sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company_website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        {name}
                      </label>
                      <div className="mt-1 flex rounded-md border border-gray-100">
                        <input
                          type="text"
                          name="company_website"
                          id="company_website"
                          className="border border-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder={name}
                          onChange={(e) => setCourseName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="border border-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Description"
                        defaultValue={""}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile.
                    </p>
                  </div>

                  {showUpload ? (
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        {filename}
                      </label>
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
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

AddCourseForm.propTypes = {
  name: PropTypes.string,
  details: PropTypes.string,
  filename: PropTypes.string,
  url: PropTypes.string,
  classroomid: PropTypes.number,
  moduleId: PropTypes.number,
  showUpload: PropTypes.bool,
  namefield: PropTypes.string,
  descfeild: PropTypes.string,

  
  
};
