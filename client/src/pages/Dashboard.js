import React, {Component} from "react";
import DashboardC from "../components/DashboardC";
import API from "../utils/API";
import {Redirect} from "react-router-dom"

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
        .then(res => this.setState({houses: res.data, image: "", name: "", address: "", price: 0, match: 0}) )

        API.getWishlist(this.props.match.params.email)
        .then(res => {this.setState({wishlist: res.data}); this.makeMatch(); } )
        
    }

    makeMatch = () =>{
        let {houses, wishlist} = this.state;
        for(let index = 0; index < houses.length; index++){

            let match = 0;

            if(wishlist[0].basement === true && houses[index].basement === true ){
                match = match + 1;
            }
            if(wishlist[0].bathrooms === houses[index].bathrooms){
                match = match + 1;
            }
            if(wishlist[0].bedrooms === houses[index].bedrooms){
                match = match + 1;
            }
            if(wishlist[0].garage === true && houses[index].garage === true){
                match = match + 1;
            }
            if(wishlist[0].pool === true && houses[index].pool === true){
                match = match + 1;
            }
            if(wishlist[0].yard === true && houses[index].yard === true){
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
        this.setState({
            toWelcome: true
        })
    }

    render(){
        const {email} = this.props.match.params;
        if(this.state.toWelcome === true){
            return <Redirect to="/"/>
        }
        if(this.state.toAddHouse === true){
            return <Redirect to={email + "/addhouse"}/>
        }
        return(
            <div>
                <h1>Dashboard</h1> 
                {/* <DashboardComp
                goToWelcome={this.goToWelcome}
                /> */}

                <button onClick={this.goToWelcome}>Logout</button>
                <button onClick={this.goToAddHouse}>Add House</button>

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

            </div>
        )
    }
}

export default  Dashboard;