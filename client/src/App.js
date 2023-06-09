import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

function App() {

  const {user}=useContext(AuthContext);

  return (
    <div >
      <Router>
        <Switch>

          <Route exact path="/" > 
          {user ? <Home/> : <Register/>}
          </Route>

          <Route   path="/register" > 
          {user ? <Redirect to="/" /> : <Register/>}
          </Route>

          <Route   path="/login" > 
          {user ? <Redirect to="/" /> : <Login/>}
          </Route>

          <Route   path="/profile/:username"> 
               <Profile />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
