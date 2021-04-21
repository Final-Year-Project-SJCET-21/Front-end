import React from "react";
// import Chart from "chart.js";
import CardStats from "./CardStats.js";
import axios from 'axios';

export default function CardBarChart(props) {

  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const token = props.token;

  
  axios
  .get('http://localhost:1337/courses', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  .then(response => {
    // Handle success.
    setIsLoaded(true);
    setItems(response.data);
    console.log('Data: ', response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error.response);
  });

 
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div class="p-5">  
          <div className="flex flex-wrap">
            
            {items.map(item => (
              <div className=" ">
              
                <CardStats
                statTitle={item.CourseName} 
                statSubtitle={item.CourseName} 
                
                
              />
                
                
                
              </div>
              ))}
            </div>
              
          </div>
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}
