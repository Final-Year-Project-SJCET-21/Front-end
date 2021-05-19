import logo from "./logo.svg";
import "./App.css";

import Admin from "./layouts/Admin";
// import Face from "./components/Face/Face"
import Auth from "./layouts/Auth"; 
import Header from './components/HomePage/homePage'
import FaceApi from './components/Face/Face'
import AddCourse from './views/admin/AddCourse'
import CheckTeacherOrStudent from './views/admin/CheckTeacherOrStudent'
import Profile from './views/Profile'
import CourseDetails from './views/admin/CourseDetails'
import EnrolledStudents from './views/admin/EnrolledStudents'

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { Profiler } from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          <Route path="/coursedetails" component={CourseDetails } />
          <Route path="/add" component={CheckTeacherOrStudent} />
          <Route path="/enrolledstudents" component={EnrolledStudents} />
          {/* s */}
          
          {/* add routes without layouts */}
          
          <Route path="/" exact component={Header} />
          <Route path="/face" exact component={FaceApi} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
  </BrowserRouter>
    </>
  );
}

export default App;
