import React, {Component} from "react";
import DashboardC from "../components/DashboardC";
import API from "../utils/API";
import {Redirect} from "react-router-dom"
var houseses

class Dashboard extends Component{

    state = {
        name: "",
        address: "",
        price: 0,
        houses: [],
        wishlist: [],
        toWelcome: false
    }

    componentDidMount(){
        //API.getWishlist(this.props.match.params.email).then(res => console.log(res.data));
        API.getHouses(this.props.match.params.email)
        .then(res => this.setState({houses: res.data, name: "", address: "", price: 0}) )

        API.getHouses(this.props.match.params.email)
        .then(res => {console.log(res.data); houseses = res.data; })
        
        API.getWishlist(this.props.match.params.email)
        .then(res => console.log(res.data))
        
    }

    makeMatch = () =>{
        for(let index = 0; index < this.state.houses.length; index++){
            if(this.state.wishlist.basement === true ){}
        }
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
                <h1>Dashboard</h1> 
                {/* <DashboardComp
                goToWelcome={this.goToWelcome}
                /> */}

                {this.state.houses.map(house => (
                    <DashboardC
                    key={house._id}
                    name={house.nickname}
                    address={house.address}
                    price={house.price}
                    />
                ))}

            </div>
        )
    }
}

export default  Dashboard;