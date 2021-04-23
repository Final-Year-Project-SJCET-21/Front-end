import React from "react";
import PropTypes from "prop-types";

export default function CourseCard({
  statSubtitle,
  statTitle,
  statArrow,
  statPercent,
  statPercentColor,
  statDescripiron,
  statIconName,
  statIconColor,
}) {
  return (
    <>
      <div class="">  
    
    <div class="max-w-xs w-60 rounded bg-white shadow-lg">
      <img class="w-full" src="https://image.freepik.com/free-vector/cute-penguin-sleeping-hug-pillow-cartoon-illustration_138676-3013.jpg" alt="Mountain"/>
      <div class="px-6 py-4">
        <div class="font-bold text-sm mb-2">{statTitle}</div>
        <p class="text-gray-700 text-sm">
          {statSubtitle}
        </p>
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
 
 
};
