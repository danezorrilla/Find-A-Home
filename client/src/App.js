import React from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AddHouse from "./pages/AddHouse";
import Wishlist from "./pages/Wishlist";
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
