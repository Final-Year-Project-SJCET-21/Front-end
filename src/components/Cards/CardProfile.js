import React from "react";
import axios from "axios";
import CourseCard from './CourseCard';

// components

export default function CardProfile(props) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const token = props.token;

  axios
    .get("http://project-api.fenstrok.com/api/clasroom/", {
      headers: {
        // Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
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

  return (
    <>
      <div class="p-5">
      
              <div className="flex flex-wrap">
                {items.map((item) => (
                  <button className="focus:outline-none m-7 hover:shadow-md"
                  onClick={()=>{props.history.push('/coursedetails')}}>
                    <div className="bg-white">
                    
                    <CourseCard
                      statTitle={item.room_name}
                      statSubtitle={item.created_by}
                    />
                  </div>
                  </button>
                ))}
              </div>
            </div>
    </>
  );
}
