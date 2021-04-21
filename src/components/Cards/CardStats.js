import React from "react";
import PropTypes from "prop-types";

export default function CardStats({
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
      <div class="p-7">  
    
    <div class="max-w-xs w-60 rounded bg-white shadow-lg">
      <img class="w-full" src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=752&q=80" alt="Mountain"/>
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

CardStats.defaultProps = {
  // statSubtitle: "Traffic",
  // statTitle: "350,897",
  // statArrow: "up",
  // statPercent: "3.48",
  // statPercentColor: "text-emerald-500",
  // statDescripiron: "Since last month",
  // statIconName: "far fa-chart-bar",
  // statIconColor: "bg-red-500",
};

CardStats.propTypes = {
  statSubtitle: PropTypes.string,
  statTitle: PropTypes.string,
 
 
};
