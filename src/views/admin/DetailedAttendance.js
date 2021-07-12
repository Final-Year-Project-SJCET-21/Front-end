
/* This example requires Tailwind CSS v2.0+ */
import React, { useState, useEffect } from "react";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import db from '../../firebaseconfig';
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";



  
  export default function DetailedAttendance(props) {
    const room=props.history.location.state.courseName;
    const classId=props.history.location.state.classId;
    const endingtime=props.history.location.state.endingtime;
    const img = 'https://carnbrae.com.au/wp-content/uploads/2021/05/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg';
      const [data, setData] = useState([]);
      const [course, setCourse] = useState([]);
      const ref = db.collection("students");
      const courseRef = db.collection("courseActive");
    function getData() {
      
      ref
      .where("classid", "==", classId)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setData(items);

          // setLoading(false);
        });
        courseRef
      .where("classid", "==", classId)
        .onSnapshot((querySnapshot) => {
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push(doc.data());
          });
          setCourse(items);

          // setLoading(false);
        });
    
  }

  useEffect(() => {
      getData();
      console.log(data)
      console.log(classId)
      console.log(endingtime)
  })
    return (
        <div className="relative  bg-blueGray-100">
        <AdminNavbar />
  
  <HeaderStats />
          <div className="px-10 md:px-10 mx-auto w-full -m-24 mb-6">
            <div className="flex flex-wrap"></div>
            <div className="w-full  px-4">
              <div className="relative -mt-10 flex flex-col min-w-0 min-h-screen break-words bg-white w-full mb-6 border border-gray-200 rounded-lg pb-20">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  
                <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden  sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Starting Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Ending Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Active Time
                    </th>
                    {/* <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data.map((person) => (
                    <tr key={person.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={img} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{person.name}</div>
                            <div className="text-sm text-gray-500">{person.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.startingtime}</div>
                        
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{endingtime}</div>
                        
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {person.isactive?(
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                        </span>):(<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-400">
                        Inactive
                        </span>)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.onlineseconds/60} minutes</td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      
      </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
  

