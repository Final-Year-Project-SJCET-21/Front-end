import React, { useState, useEffect } from 'react'



import db from '../../../firebaseconfig';


export default function Sidebar (props){
    const activeClassId=props.activeClassId;
  console.log(activeClassId);
  const [name, setName] = React.useState(
    localStorage.getItem("username") || ""
  );
  const [role, setRole] = React.useState(
    localStorage.getItem("role") || ""
  );
  const [userId, setUserId] = React.useState(
    localStorage.getItem("userid") || ""
  );
  const [datas, setDatas] = useState([]);
  
  
  const ref = db.collection("courseActive");
  const studentRef = db.collection("students");

  function addClass(newData) {
    ref
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
  }
  function addStudent(newData) {
    studentRef
      //.doc() use if for some reason you want that firestore generates the id
      .doc(newData.id)
      .set(newData)
      .catch((err) => {
        console.error(err);
      });
  }

  function studentExist() {
    
    
    const snapshot = studentRef
   .where("classid","==",activeClassId).where("userid","==",userId)
   .get();
    if (snapshot.empty) { return false}
    else {return true}
    
  }
  function getData() {
    

    console.log(props.activeClassId);
    studentRef.where("classid","==",activeClassId).onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setDatas(items);
      console.log(items);
      // setLoading(false);
    });
  
  }
  // if(role==="T"){
  //   // getData();
  //   setInterval(() => getData(), (10000))}
  // console.log("activeClassId");
  //   console.log(activeClassId);
  
  useEffect(()=>{
    const activeClassId=props.activeClassId;
    console.log("activeClassId");
    console.log(activeClassId);
    if(role==="T"){
      // getData();
      let interval = setInterval(() => getData(), (1000))
    //destroy interval on unmount
    return () => clearInterval(interval)
      
    }
    // getData();
    // console.log(datas);
    // console.log(activeClassId);
    
  })

  // if(role==="T"){
  //   getData();
  //   let interval = setInterval(() => getData(), (1000))
  // //destroy interval on unmount
  // return () => clearInterval(interval)
    
  // }

  return (
    <div>
      
      {datas.map((data) => (
          <div>
              <p className="text-white flex flex-row">{data.name} is {data.isactive?(<p className="text-green-500">Active</p>):<p className="text-red-700">Inactive</p>}</p>
          </div>
      ))}
    </div>
  );
}


