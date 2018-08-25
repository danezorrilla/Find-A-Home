import React, {Component} from "react";
import DashboardComp from "../components/DashboardComp";


class Dashboard extends Component{

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <DashboardComp/>
            </div>
        )
    }
}

export default  Dashboard;