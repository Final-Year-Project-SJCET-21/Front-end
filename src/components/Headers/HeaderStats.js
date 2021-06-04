import React, { useEffect } from "react";
import hand from "../../assets/img/hand.png"
import axios from 'axios';
// components



export default function HeaderStats(props) {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [username, setusernameData] = React.useState(
    localStorage.getItem("username") || ""
  );
  const token = props.token;

  
  
  
    return (
      <>
      {/* Header */}
      <div className="relative  bg-hero-pattern bg-cover md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          
          <div >
          <div className="w-full lg:w-6/12  px-4">
          <div className="flex flex-row items-center">
          <h1 className="text-white font-bold text-3xl">Hey, {username} </h1>
          
          <img className="h-10 pl-3" src={hand}/>
          </div>
          <p className="text-white ">Welcome to your learning dashboard</p>
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