import React, {useState} from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AuthBase from "./Base";
import { validateYupSchema } from "formik";
export default function Register(props) {

  var url = "https://project-api.fenstrok.com/rest-auth/registration/";

  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isSucess, setisSucess] = useState(false);
  const [token, setToken] = useState("");
  const [errorName, setErrorName] = useState("");
  const [erroremail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  console.log(props.match.params.role);

  if(props.match.params.role==="teacher"){
    url+="teacher";
  }
  const handleSignup = (evt) => {
    evt.preventDefault();
    // alert(`Submitting Name ${username} ${email} ${password}`)
    axios
    .post(url, {
      name: username,
      email: email,
      password1: password,
      password2: password,
      
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      // console.log('User profile', response.data.user);
      // console.log('User token', response.data.jwt);
      setToken(response.data.key);
      setisSucess(true);
      localStorage.setItem("key", response.data.key);
      localStorage.setItem("userid", response.data.user.id);
      localStorage.setItem("role", response.data.user.role);
      localStorage.setItem("username", response.data.user.name);

      
      
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
      alert("Couldn't log you in. Check if all the feilds are correct.");
    });
}

const myChangeHandlerName = (evt)=>{
  let err = '';
  let val = evt.target.value;
  if(val!==""){
    setErrorName("")
    setName(evt.target.value)
  }
  else{
    setErrorName("This field cannot be empty")
  }

}

const myChangeHandlerEmail= (evt)=>{
  let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let err = '';
  let val = evt.target.value;
  if(val==""){
    setErrorEmail("This field cannot be empty")
  }
  else if(!regEmail.test(val)){
    setErrorEmail("Invalid Email")
  }
  else{
    setErrorEmail("")
    setEmail(evt.target.value);
    
  }

}

const myChangeHandlerPassword= (evt)=>{
  var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let err = '';
  let val = evt.target.value;

  if(val==""){
    setErrorPassword("This field cannot be empty")
  }else if (val.length < 8 && val.length>0) {
    setErrorPassword("Password is not long enough")
}
// Check for capital letters
else if (!val.match(/\d/)) {
  setErrorPassword("Must contain a digit")
}
else if (!format.test(val)) {
  setErrorPassword("Must contain a special character")
}
  else{
    
    setPassword(evt.target.value);
    setErrorPassword("")
  }

}
  
if(isSucess){
  props.history.push('/admin',{jwt:token})
}



  return (
    <AuthBase>

                <div className="w-full md:w-5/6 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm ">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="border border-gray-100 bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1   hover:shadow inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../../assets/img/github.svg").default}
                    />
                    Github
                  </button>
                  <button
                    className="border border-gray-100 bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1   hover:shadow inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("../../assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 ">
                  <small>Or sign up with credentials</small>
                </div>
                <form onSubmit={handleSignup}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="email"
                      className="border border-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      // value="username"
                      onChange={myChangeHandlerName}
                    />
                    <p className="text-sm text-red-600">{errorName}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border border-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={myChangeHandlerEmail}
                    />
                    <p className="text-sm text-red-600">{erroremail}</p>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border border-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={myChangeHandlerPassword}
                    />
                    <p className="text-sm text-red-600">{errorPassword}</p>
                  </div>
                  


                  <div className="text-center mt-6">
                    <Link to='/admin'>
                    <button
                      className="bg-indigo-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      
                    >
                      Create Account
                    </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>

    </AuthBase>
  );
}
