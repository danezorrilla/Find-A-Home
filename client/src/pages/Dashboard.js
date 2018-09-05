import React, {Component} from "react";
import DashboardComp from "../components/DashboardComp";
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


<div className="dashboard-page home-list" id="page-wrapper"> 

{/* <button onClick={props.goToWelcome}>Logout</button> */}

<ul className="uk-subnav uk-subnav-divider" data-uk-margin>
 <li><a href="addhouse">Add House</a></li>
 <li><a href="wishlist">Wish List</a></li>
 <li><a href="/">Logout</a></li>
</ul>


<div data-uk-slider="center: true">
<div className="uk-position-relative uk-visible-toggle uk-light">
 <ul className="uk-slider-items uk-child-width-1-2@s uk-grid">
            
                {/* <h1>Dashboard</h1>  */}
                {/* <DashboardComp
                goToWelcome={this.goToWelcome}
                /> */}

                {this.state.houses.map(house => (
                    <DashboardComp
                    key={house._id}
                    image={house.photo}
                    name={house.nickname}
                    address={house.address}
                    price={house.price}
                    />
                ))}

            </ul>

<a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous uk-slider-item="previous"></a>
<a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next uk-slider-item="next"></a>

</div>

<ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>

</div>
        )
    }
}

export default  Dashboard;