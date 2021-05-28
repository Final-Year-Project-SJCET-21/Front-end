import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import history from '../../history.js';


export default function ModuleCard({
  props,
  history,
  id,
  moduleName,
  moduleId
  
 
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

  

  

  return (
    <>
        <div className=" flex items-center justify-center ">
                  <div className="bg-white p-4 rounded w-full">
                    <div className=" max-w-2xl mt-4 mx-auto">
                      <div className=" border rounded-lg">
                        <div className="flex items-center space-x-4 p-4">
                          <div className="flex items-center p-4 bg-purple-600 text-white rounded-lg">
                            {/* <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current w-7 h-7"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M17.997 18h-11.995l-.002-.623c0-1.259.1-1.986 1.588-2.33 1.684-.389 3.344-.736 2.545-2.209-2.366-4.363-.674-6.838 1.866-6.838 2.491 0 4.226 2.383 1.866 6.839-.775 1.464.826 1.812 2.545 2.209 1.49.344 1.589 1.072 1.589 2.333l-.002.619zm4.811-2.214c-1.29-.298-2.49-.559-1.909-1.657 1.769-3.342.469-5.129-1.4-5.129-1.265 0-2.248.817-2.248 2.324 0 3.903 2.268 1.77 2.246 6.676h4.501l.002-.463c0-.946-.074-1.493-1.192-1.751zm-22.806 2.214h4.501c-.021-4.906 2.246-2.772 2.246-6.676 0-1.507-.983-2.324-2.248-2.324-1.869 0-3.169 1.787-1.399 5.129.581 1.099-.619 1.359-1.909 1.657-1.119.258-1.193.805-1.193 1.751l.002.463z" />
                            </svg> */}
                            <svg 
                            id="bold" 
                            enable-background="new 0 0 32 32" 
                            className="fill-current w-7 h-7"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                             
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z" fill="#f5e6fe"/><g fill="#d9a4fc"><path d="m12.333 11.667c-.368 0-.667-.299-.667-.667v-2.333c.001-.369.299-.667.667-.667s.667.298.667.667v2.333c0 .368-.299.667-.667.667z"/><path d="m15.5 11.667c-.368 0-.667-.299-.667-.667v-2.333c0-.369.299-.667.667-.667s.667.299.667.667v2.333c0 .368-.299.667-.667.667z"/><path d="m18.667 11.667c-.368 0-.667-.299-.667-.667v-2.333c0-.369.299-.667.667-.667s.667.299.667.667v2.333c-.001.368-.299.667-.667.667z"/></g><path d="m20 9.5h-9c-1.011 0-1.833.822-1.833 1.833v10.833c0 1.012.822 1.834 1.833 1.834h9c1.011 0 1.833-.822 1.833-1.833v-10.834c0-1.011-.822-1.833-1.833-1.833zm-7.5 3.833h3.333c.368 0 .667.299.667.667s-.299.667-.667.667h-3.333c-.368 0-.667-.299-.667-.667s.299-.667.667-.667zm6.667 6.667h-6.667c-.368 0-.667-.299-.667-.667s.299-.667.667-.667h6.667c.368 0 .667.299.667.667s-.299.667-.667.667zm0-2.667h-6.667c-.368 0-.667-.299-.667-.667s.299-.666.667-.666h6.667c.368 0 .667.299.667.667s-.299.666-.667.666z" fill="#be63f9"/></svg>
                            
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-500 font-semibold text-sm">
                              
                            </p>
                            <div className="flex items-baseline space-x-4">
                              <h2 className="text-l font-semibold">
                                {moduleName}
                              </h2>
                            </div>
                          </div>
                        </div>
                        <button
                           onClick={()=>{history.push("/folder", { roomid: id, moduleId: moduleId,   });}}
                          className="w-full block p-3 text-l font-semibold bg-purple-50 text-purple-800 hover:bg-purple-100 cursor-pointer"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              
              
      
    </>
  );
}

ModuleCard.defaultProps = {
  // statSubtitle: "Traffic",
  // statTitle: "350,897",
  // statArrow: "up",
  // statPercent: "3.48",
  // statPercentColor: "text-emerald-500",
  // statDescripiron: "Since last month",
  // statIconName: "far fa-chart-bar",
  // statIconColor: "bg-red-500",
};

ModuleCard.propTypes = {
moduleName: PropTypes.string,
moduleId: PropTypes.number,
id: PropTypes.number,

history : PropTypes.any
 
 
};
