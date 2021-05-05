
import React, { useState } from "react";
import axios from "axios";
import Register from "./Register";
import Logo from '../../assets/img/logo.png'
import AuthBase from "./Base";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function Login(props) {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [isSucess, setisSucess] = useState(false);

  const handleSignin = (evt) => {
    evt.preventDefault();
    
    axios
      .post("https://project-api.fenstrok.com/rest-auth/login/", {
        email: email,
        password: password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");

        console.log("User token", response.data.key);
        localStorage.setItem("key", response.data.key);
        setToken(response.data.key);
        setisSucess(true);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  };

  if (isSucess) {
    props.history.push("/admin", { jwt: token });
  }

  return (
    <AuthBase>
<div className="w-full  px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 border border-gray-200 rounded-lg bg-white border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className=" border border-gray-100 bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1  hover:shadow inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
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
                    className="border border-gray-100 bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  hover:shadow inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
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
                  <small>Sign in with credentials</small>
                </div>
                
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block  text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border border-gray-100 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <span class="text-gray-700 block  text-blueGray-600 text-xs font-bold mb-0">Account Type</span>
                        <div class="mt-2">
                          <label class="inline-flex items-center">
                            <input type="radio" class="form-radio" name="accountType" value="personal"/>
                            <span class="ml-2 block  text-blueGray-600 text-xs font-bold ">Teacher</span>
                          </label>
                          <label class="inline-flex items-center ml-6">
                            <input type="radio" class="form-radio" name="accountType" value="busines"/>
                            <span class="ml-2  text-blueGray-600 text-xs font-bold ">Student</span>
                          </label>
                        </div>
                  <div>
                    
                    <label className="inline-flex items-center cursor-pointer mt-4">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border border-gray-200 rounded text-blueGray-700 ml-0 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-indigo-500 text-white active:bg-blueGray-600 text-sm font-bold  px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleSignin}
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-white"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-white">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>

    </AuthBase>
  );
}
