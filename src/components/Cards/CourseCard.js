import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Avatar from "../AvatarStack/Avatar"

export default function CourseCard({
  history,
  statSubtitle,
  statTitle,
  coursecover,
  id,
  showButton,
 
}) {
  const [isSucess, setisSucess] = useState(false);
  const [token, setToken] = React.useState(
    localStorage.getItem('key') || ''
  );
  const [userId, setuserData] = React.useState(
    localStorage.getItem('userid') || ''
  );
  const [role, setroleData] = React.useState(
    localStorage.getItem('role') || ''
  );

  const handleEnroll=(evt)=>{
    console.log(userId);
    evt.preventDefault();
    
    axios
      .post(`https://project-api.fenstrok.com/api/clasroom/${id}/enrolled-students/`, {
         student: userId,
        
      },{
        headers: {
            'Authorization': `Token ${token}`,
            
          }
      }
      )
      .then((response) => {
        // Handle success.
        console.log("Well done!");

        
        setisSucess(true);
        alert("You have successfully enrolled");
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error);
      });
  }

  

  return (
    <>
      <div class="rounded-xl">  
    
    <div class="max-w-xs w-64 rounded-lg bg-white border border-gray-100">
      <img class="w-full rounded-lg " src={coursecover} alt="Mountain"/>
      <div class="px-3 py-4 text-left">
        <div class="font-bold font-nunito text-lg mb-2">{statTitle}</div>
        
        <p class="text-gray-900 text-sm">
          
          {statSubtitle}
        </p>
        <p class="text-gray-700 text-xs">
          Faculty in charge
        </p>
        <Avatar/>
        <br/>
        <div className="flex flex-row">
        
                    
                    {
                      role==="S" && showButton ===true ?(
                        <button
                      className="bg-blue-700 text-white active:bg-blueGray-600 text-sm font-bold  px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleEnroll}
                    >
                      
                      Enroll
                    </button>
                      ):(
                        <div></div>
                      )
                    }
        </div>
      </div>
      
    </div>
  </div>
    </>
  );
}

CourseCard.defaultProps = {
  // statSubtitle: "Traffic",
  // statTitle: "350,897",
  // statArrow: "up",
  // statPercent: "3.48",
  // statPercentColor: "text-emerald-500",
  // statDescripiron: "Since last month",
  // statIconName: "far fa-chart-bar",
  // statIconColor: "bg-red-500",
};

CourseCard.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
  coursecover: PropTypes.string,
  id: PropTypes.number,
  showButton: PropTypes.bool,
 
 
};
