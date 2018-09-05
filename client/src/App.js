import React from "react";
import Welcome from "./pages/Welcome";
import Login from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import AddHouse from "./pages/AddHouse";
import Wishlist from "./pages/Wishlist";
import Wishlist2 from "./pages/Wishlist2";
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";

const App =() =>(
    <Router>
      <div>
        <Switch>
      <Route exact path = "/" component={Welcome}/>
      <Route exact path = "/login" component={Login}/>
      <Route exact path = "/signup" component={SignUp}/>
      {/* <Route exact path = "/wishlist"  component={Wishlist}/> */}
      <Route exact path = "/:email/wishlist" component={Wishlist}/>
      <Route exact path = "/wishlist2" component={Wishlist2}/>
      <Route exact path = "/:email/dashboard" component={Dashboard}/>
      <Route exact path = "/:email/addhouse" component={AddHouse}/>

      </Switch>

  </div>
    </Router>
);
  
export default App;
