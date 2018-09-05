import React, { Component } from "react";
import WishListForm from "../components/WishListForm"
import API from "../utils/API";
import Dashboard from "./Dashboard";
import {Redirect} from "react-router-dom";
import fakeAuth from "../components/Authentication"

class Wishlist extends Component {

    state = {
        yard: false,
        garage: false,
        basement: false,
        pool: false,
        bedrooms: 1,
        bathrooms: 1,
        Dashboard: false
    }
    
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
        })
    }

    submitForm = event =>{
        event.preventDefault();
        const {email} = this.props.match.params;
        API.createWishlist(email, {yard: this.state.yard, garage: this.state.garage, basement: this.state.basement,
            pool: this.state.pool, bedrooms: this.state.bedrooms, bathrooms: this.state.bathrooms})
        .then(res => console.log(res.data))
        this.goToDashboard();
    }

    goToDashboard = event =>{
        fakeAuth.authenticate(() => {
            this.setState({
                toDashboard: true
            })
        })
    }

    render(){
        if(this.state.toDashboard === true){
            return <Redirect to="dashboard"/>
                }

        return(
            <div>
                <h1>{this.props.match.params.email}</h1>
                <WishListForm
                checkboxChange={this.checkboxChange}
                inputChange={this.inputChange}
                submitForm={this.submitForm}
                yard={this.state.yard}
                garage={this.state.garage}
                basement={this.state.basement}
                pool={this.state.pool}
                bedrooms={this.state.bedrooms}
                bathrooms={this.state.bathrooms}
                goToDashboard={this.goToDashboard}

                />
            </div>
        )
    }
}

export default Wishlist;