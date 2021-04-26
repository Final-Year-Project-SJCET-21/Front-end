import React, { useEffect } from "react";
import axios from 'axios';
// components



export default function HeaderStats(props) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const token = props.token;

  
  
  
    return (
      <>
      {/* Header */}
      <div className="relative  bg-deep-purple-accent-400 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          
          <div >
          <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
          

          </div>
          
          
            {/* Card stats */}
            {/* <div className="flex flex-wrap">
            
            {items.map(item => (
              <div className=" ">
              
                <CardStats
                statTitle={item.CourseName} 
                statSubtitle={item.CourseName} 
                
                
              />
                
                
                
              </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </>
    );
  
}