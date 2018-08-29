import React, {Component} from "react";
import DashboardComp from "../components/DashboardComp";
import {Redirect} from "react-router-dom"


class Dashboard extends Component{

    state = {
        toWelcome: false
    }

    goToWelcome = event =>{
        this.setState({
            toWelcome: true
        })
    }

    render(){
        if(this.state.toWelcome === true){
            return <Redirect to="/"/>
        }
        return(
            <div>
                {/* <h1>Dashboard</h1> */}
                <DashboardComp
                goToWelcome={this.goToWelcome}
                />
            </div>
        )
    }
}

export default  Dashboard;