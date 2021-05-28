import React from "react";
import HeaderStats from "../../components/Headers/HeaderStats.js";
import FooterAdmin from "../../components/Footers/FooterAdmin.js";
import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import AddCourseForm from "../../components/Forms/AddCourseForm";
import ModuleCard from "../../components/Cards/ModuleCard";
import axios from "axios";


export default function Folder(props) {

  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [token, setToken] = React.useState(
    localStorage.getItem('key') || ''
  );

  if(isLoaded==false){
    axios
    .get(`https://project-api.fenstrok.com/api/clasroom/${props.history.location.state.roomid}/modules/${props.history.location.state.moduleId}/notes/`, {
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
    // const url=`https://project-api.fenstrok.com/api/clasroom/${props.history.location.state.classroomid}/modules/`
    
  return (
    <>
      <div className="relative  bg-blueGray-100">
      <AdminNavbar />

<HeaderStats />
        <div className="px-10 md:px-10 mx-auto w-full -m-24 mb-6">
          <div className="flex flex-wrap"></div>
          <div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full min-h-screen mb-10 shadow-lg rounded">
              <div className="rounded-t mb-0 px-4 py-3 bg-transparent">

              {items.map((item) => (
                  
                  
                    
                    
                  <ModuleCard
                      history={props.history}
                      
                      // id={id}
                      // moduleId={module.id}
                      moduleName={item.filename}
                     
                    />
                   
                
                  
                
                
              ))}
              
              </div>
            </div>
          </div>
        </div>
<FooterAdmin/>
      </div>
    </>
  );
}
