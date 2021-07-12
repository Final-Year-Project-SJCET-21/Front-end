/* This example requires Tailwind CSS v2.0+ */
import React, {useState, useEffect} from "react";
import db from '../../firebaseconfig';
import HeaderStats from "../../components/Headers/HeaderStats.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AttendaceClassCard from "../../components/Cards/AttendaceClassCard";


  
  export default function Attendance(props) {
      var i=1;
      const room=props.history.location.state.courseName;
    const [data, setData] = useState([]);
    const ref = db.collection("courseActive");


    function getData() {
        
          ref
          .where("coursename", "==", room)
            .onSnapshot((querySnapshot) => {
              const items = [];
              querySnapshot.forEach((doc) => {
                items.push(doc.data());
              });
              setData(items);
    
              // setLoading(false);
            });
        
      }

      useEffect(() => {
          getData();
          
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
                <div class="container flex flex-col mx-auto w-full items-center justify-center">
    
        
                {data.map((data) => 
                <button onClick={() => {
                    props.history.push("/detailedattendance",{
                        classId: data.id,
                        courseName: room,
                        endingtime: data.endingtime
                    } );
                  }}>
                        <AttendaceClassCard
                            history={props.history}
                            classNumber={i++}
                            date={data.date}
                        />
                </button>
                )}
            
           
            </div>

      
      </div>
          </div>
        </div>
      </div>
      </div>
      
    )
  }
  