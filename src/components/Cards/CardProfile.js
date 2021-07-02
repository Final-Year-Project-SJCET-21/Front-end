import React from "react";
import axios from "axios";
import CourseCard from './CourseCard';
import coursecover1 from "../../assets/img/coursecover1.jpg";
import coursecover2 from "../../assets/img/coursecover2.png";
import coursecover3 from "../../assets/img/coursecover3.png";

import coursecover5 from "../../assets/img/coursecover5.png";
import coursecover6 from "../../assets/img/coursecover6.png";
import coursecover7 from "../../assets/img/coursecover7.png";
import coursecover8 from "../../assets/img/coursecover8.jpg";


// components

export default function CardProfile(props) {

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const token = props.token;

  var coursecover = [
   
    coursecover3,
    coursecover5,
    coursecover2,    
    coursecover7,
    coursecover6,    
    coursecover8,    
    coursecover1,

    
    
  ];
  var i=0;

  if(isLoaded===false){
    axios
    .get("https://project-api.fenstrok.com/api/my-courses/", {
      headers: {
        Authorization: `Token ${token}`,
        
      },
    })
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

  return (
    <>
      <div class="px-2 pb-5">
      
              <div className="flex flex-wrap mx-auto">
                {items.map((item) => (
                  
                  <div className="focus:outline-none m-6 "
                  
                  >
                    <div className="">
                    <button
                    className="hover:shadow-md focus:outline-none"
                    onClick={()=>{props.history.push("/coursedetails", { roomid: item.id, })}}
                    >
                    <CourseCard
                      history={props.history}
                      statTitle={item.room_name}
                      statSubtitle={item.created_by}
                      coursecover={coursecover[(i>6)?i=0:i++]}
                      id={item.id}
                      showButton={false}
                    />
                    </button>
                  </div>
                  </div>
                ))}
              </div>
            </div>
    </>
  );
}
