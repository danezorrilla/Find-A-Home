import React, { Component } from "react";
import "../components/WishList2Form/WishList2Form.css"
import WishList2Form from "./../components/WishList2Form"


var construction = require('./../components/Images/construction.png');
var calendar = require('./../components/Images/calendar.svg')
var costs  = require('./../components/Images/costs.png')
var features = require('./../components/Images/features.png')
var fixrepair = require('./../components/Images/fixrepair.png')
var kitchen = require('./../components/Images/kitchen.png')
var neighborhood = require('./../components/Images/neighborhood.png')
var petskids = require('./../components/Images/petskids.png')
var proximity = require('./../components/Images/proximity.png')
var regulations = require('./../components/Images/regulations.png')
var rooms = require('./../components/Images/rooms.png')
var utilities = require('./../components/Images/utilities.png')

class Wishlist2 extends Component {

    state = {
        features: [

            "yard"
            ,

            "garage"
            ,

            "basement"
            ,

            "pool"
            ,

            "bedrooms"
            ,

            "bathrooms"

        ],
        addToList: ""
    }


    handleCheckBox = event => {
        
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        const { addToList, features } = this.state;
        if (addToList) {
            this.setState({
                features:[addToList, ...features],
                addToList: ""
            })
        }
        console.log(features)

    }




    render() {
        return (
            <div>
                <h1>Wish List</h1>

                <h2>Click a category to see if these questions about your house would interest you.</h2>
                <div id="column"> 
                <div class = "row">
                
                    <img src = {calendar} width="50" alt="age of house" />
                    <img src = {construction} width="50" alt="home construction" />
                    <img src = {costs} width="50" alt="home related costs" />
                    
                </div>
                <div class = "row">
                <img src = {features} width="50" alt="house features" />
                    <img src = {fixrepair} width="50" alt="fix or repair" />
                    <img src = {kitchen} width="50" alt="kitchen" />
                </div>
                <div class = "row">
                <img src = {neighborhood} width="50" alt="neighborhood" />
                    <img src = {petskids} width="50" alt="pets or kids" />
                    <img src = {proximity} width="50" alt="distance from places" />
                </div>
                <div class = "row">
                <img src = {regulations} width="50" alt="regulations" />
                    <img src = {rooms} width="50" alt="rooms" />
                    <img src = {utilities} width="50" alt="utilities" />
                </div>
                </div>
                {this.state.features.map((feature, i) => (
                    <WishList2Form
                        id={i}
                        key={i}
                        feature={feature}
                    />
                ))}
                <h2>Add Choices</h2>
                <input onChange={this.handleInputChange}
                    name="addToList"
                    value={this.state.addToList}
                    type="text"
                />
                <input onClick={this.handleSubmit} type="submit" value="Submit" />

            </div>

        )
    }
};

export default Wishlist2;