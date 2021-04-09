import logo from "./logo.svg";
import "./App.css";

import Admin from "./layouts/Admin";

import Auth from "./layouts/Auth"; 
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
          {/* add routes without layouts */}
          
          <Route path="/" exact component={Auth} />
          {/* add redirect for first page */}
          <Redirect from="*" to="/" />
        </Switch>
  </BrowserRouter>,
    </>
  );
}

export default App;
