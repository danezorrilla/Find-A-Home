import React, { Component } from "react";
import WishListForm from "../components/WishListForm"

class Wishlist extends Component {

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

                <h2>Customize your home</h2>

                {this.state.features.map((feature, i) => (
                    <WishListForm
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

export default Wishlist;