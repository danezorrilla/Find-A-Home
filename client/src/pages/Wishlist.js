import React, {Component} from "react";
import WishListForm from "../components/WishListForm"

class Wishlist extends Component{

    state = {
        bedrooms: "",
        bathrooms: ""
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <div>
                <WishListForm
                handleChange={this.handleChange}
                bedrooms={this.state.bedrooms}
                bathrooms={this.state.bathrooms}
                />
            </div>

        )
    }
};

export default Wishlist;