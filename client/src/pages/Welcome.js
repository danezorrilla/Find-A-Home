import React,{Component} from "react";
import WelcomeComp from "../components/WelcomeComp";
import {Redirect} from "react-router-dom";

class Welcome extends Component{

    state = {
        toLogin: false,
        toSignup: false
    }

    goToLogin = event =>{
        this.setState({
            toLogin: true
        })
    }

    goToSignup = event =>{
        this.setState({
            toSignup: true
        })
    }

    render(){
        if(this.state.toLogin === true){
            return <Redirect to="/login"/>
        }
        if(this.state.toSignup === true){
            return <Redirect to="/signup"/>
        }
        return(
            <WelcomeComp
                goToLogin={this.goToLogin}
                goToSignup={this.goToSignup}
            />
        )
    }

}

export default Welcome;