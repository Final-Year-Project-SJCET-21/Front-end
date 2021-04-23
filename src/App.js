import logo from "./logo.svg";
import "./App.css";

import Admin from "./layouts/Admin";

import Auth from "./layouts/Auth"; 
import Header from './components/HomePage/homePage';
import CourseDetails from "./views/admin/CourseDetails";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {/* add routes with layouts */}
          <Route path="/admin" component={Admin} />
          <Route path="/auth" component={Auth} />
          <Route path="/coursedetails" component={CourseDetails } />
          
          {/* add routes without layouts */}
          
          <Route path="/" exact component={Header} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
  </BrowserRouter>,
    </>
  );
}

export default App;
