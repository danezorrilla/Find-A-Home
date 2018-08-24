import React from "react";
import Welcome from "./components/pages/Welcome";
import Login from "./components/pages/LogIn";
import SignUp from "./components/pages/SignUp";
import Dashboard from "./components/pages/Dashboard";
import AddHouse from "./components/pages/AddHouse";
import Wishlist from "./components/pages/Wishlist";
import{BrowserRouter as Router, Route} from "react-router-dom"
import "./App.css";

const App =() =>(
    <Router>
      <div>
      <Route exact path = "/" component={Welcome}/>
      <Route exact path = "/login" component={Login}/>
      <Route exact path = "/signup" component={SignUp}/>
      <Route exact path = "/wishlist" component={Wishlist}/>
      <Route exact path = "/dashboard" component={Dashboard}/>
      <Route exact path = "/addhouse" component={AddHouse}/>

  </div>
    </Router>
);
  
export default App;
