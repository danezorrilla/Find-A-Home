import React,{Component} from "react";
import AddHouseForm from "../components/AddHouseForm";
import API from "../utils/API";
import {Redirect} from "react-router-dom";

class AddHouse extends Component{
    state = {
        photo: "",
        nickname: "",
        price: null,
        indoorsquarefeet: 0,
        address: "",
        yard: false,
        garage: false,
        basement: false,
        pool: false,
        bedrooms: 1,
        bathrooms: 1,
        toDashboard: false
    };

    checkboxChange = event =>{
        const {name, checked} = event.target;
        this.setState({
            [name]: checked
        });
    }

    inputChange = event =>{
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    goToDashboard = event =>{
        this.setState({
            toDashboard: true
        })
    };

    submitForm = event =>{
        event.preventDefault();
        const{email} = this.props.match.params;

        API.createHouse(email, {photo: this.state.photo, nickname: this.state.nickname, price: this.state.price,
        indoorsquarefeet: this.state.indoorsquarefeet, address: this.state.address, yard: this.state.yard,
        garage: this.state.garage, basement: this.state.basement, pool: this.state.pool, bedrooms: this.state.bedrooms, 
        bathrooms: this.state.bathrooms})
        .then(res => console.log(res.data));

        this.goToDashboard();
        
    }

    render(){
        if(this.state.toDashboard === true){
            return <Redirect to="dashboard"/>
        }
        return(
            <div>
                {/* <h2>{this.props.match.params.email}</h2> */}
                <AddHouseForm
                submitForm={this.submitForm}
                checkboxChange={this.checkboxChange}
                inputChange={this.inputChange}
                photo={this.state.photo}
                nickname={this.state.nickname}
                price={this.state.price}
                indoorsquarefeet={this.state.indoorsquarefeet}
                address={this.state.address}
                yard={this.state.yard}
                garage={this.state.garage}
                basement={this.state.basement}
                pool={this.state.pool}
                bedrooms={this.state.bedrooms}
                bathrooms={this.state.bathrooms}
                />
            </div>
        )
    };

}

export default  AddHouse;