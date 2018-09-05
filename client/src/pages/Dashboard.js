import React, {Component} from "react";
import DashboardC from "../components/DashboardC";
import API from "../utils/API";
import {Redirect} from "react-router-dom";
import fakeAuth from "../components/Authentication";

class Dashboard extends Component{

    state = {
        image: "",
        name: "",
        address: "",
        price: 0,
        match: 0,
        houses: [],
        wishlist: [],
        toAddHouse: false,
        toWelcome: false
    }

    componentDidMount(){

        API.getHouses(this.props.match.params.email)
        .then(res => this.setState({houses: res.data.houses, image: "", name: "", address: "", price: 0, match: 0}) )
        .catch(console.log);

        API.getWishlist(this.props.match.params.email)
        .then(res => console.log(res.data))

        API.getWishlist(this.props.match.params.email)
        .then(res => {this.setState({wishlist: res.data.wishlist}); this.makeMatch(); } )
        
    }

    makeMatch = () =>{
        const {houses, wishlist} = this.state;
        for(let index = 0; index < houses.length; index++){

            let match = 0;

            if(wishlist.basement === true && houses[index].basement === true ){
                match = match + 1;
            }
            if(wishlist.bathrooms === houses[index].bathrooms){
                match = match + 1;
            }
            if(wishlist.bedrooms === houses[index].bedrooms){
                match = match + 1;
            }
            if(wishlist.garage === true && houses[index].garage === true){
                match = match + 1;
            }
            if(wishlist.pool === true && houses[index].pool === true){
                match = match + 1;
            }
            if(wishlist.yard === true && houses[index].yard === true){
                match = match + 1;
            }

            houses[index].match = match;
        }

        this.setState({ houses });
    }

    goToAddHouse = event =>{
        this.setState({
            toAddHouse: true
        })
    }

    goToWelcome = event =>{
        fakeAuth.signout(() => {
            this.setState({
                toWelcome: true
            })
        })

    }

    render(){
        if(this.state.toWelcome === true){
            return <Redirect to="/"/>
        }
        if(this.state.toAddHouse === true){
            return <Redirect to="addhouse"/>
        }
        return(
            <div>
                <h1>Dashboard</h1> 
                {/* <DashboardComp
                goToWelcome={this.goToWelcome}
                /> */}

                <button onClick={this.goToWelcome}>Logout</button>
                <button onClick={this.goToAddHouse}>Add House</button>
                <ul>
                {this.state.houses.map(house => (
                    <DashboardC
                        key={house._id}
                        image={house.photo}
                        name={house.nickname}
                        address={house.address}
                        price={house.price}
                        match={house.match}
                    />
                ))}
                </ul>

            </div>
        )
    }
}

export default  Dashboard;