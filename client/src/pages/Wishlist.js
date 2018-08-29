import React, { Component } from "react";
import WishListForm from "../components/WishListForm"
import API from "../utils/API";

class Wishlist extends Component {

    state = {
        yard: false,
        garage: false,
        basement: false,
        pool: false,
        bedrooms: 1,
        bathrooms: 1
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
        API.createWishlist({yard: this.state.yard, garage: this.state.garage, basement: this.state.basement,
            pool: this.state.pool, bedrooms: this.state.bedrooms, bathrooms: this.state.bathrooms})
        .then(res => console.log(res.data))

    }

    render(){
        return(
            <div>
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
                />
            </div>
        )
    }
}

export default Wishlist;