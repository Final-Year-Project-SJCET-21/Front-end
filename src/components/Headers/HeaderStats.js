import React, { useEffect } from "react";


// components

import CardStats from "../../components/Cards/CardStats.js";

export default function HeaderStats() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?albumId=1")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      console.log(items);
  }, [])


  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <ul>
  //       {items.map(item => (
  //         <li key={item.id}>
  //           {item.name} {item.price}
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // }
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            {items.map(item => (
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              
                <CardStats
                statSubtitle={item.title} 
                
                // statArrow="up"
                // statPercent="3.48"
                // statPercentColor="text-emerald-500"
                // statDescripiron="Since last month"
                statIconName="far fa-chart-bar"
                statIconColor="bg-red-500"
              />
                
                
                
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}