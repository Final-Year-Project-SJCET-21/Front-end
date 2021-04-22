import logo from "./logo.svg";
import "./App.css";

import Admin from "./layouts/Admin";
// import Face from "./components/Face/Face"
import Auth from "./layouts/Auth"; 
import Header from './components/HomePage/homePage'
import Profile from './views/Profile'
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
          {/* add routes without layouts */}
          
          <Route path="/" exact component={Header} />
          <Route path="/face" exact component={Header} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
  </BrowserRouter>,
    </>
  );
}

export default App;
