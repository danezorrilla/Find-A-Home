import React,{Component} from "react";
import AddHouseForm from "../components/AddHouseForm";
import {Redirect} from "react-router-dom";

class AddHouse extends Component{
    state = {
        toDashboard: false
    };

    goToDashboard = event =>{
        this.setState({
            toDashboard: true
        })
    };

    submitForm = event =>{
        this.goToDashboard();
    }

    render(){
        if(this.state.toDashboard === true){
            return <Redirect to="/dashboard"/>
        }
        return(
            <div>
                <AddHouseForm
                submitForm={this.submitForm}
                />
            </div>
        )
    };

}


export default  AddHouse;