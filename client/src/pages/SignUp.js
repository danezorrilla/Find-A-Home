import React,{Component} from "react";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";
import { Redirect} from "react-router-dom"

class SignUp extends Component{
    state = {
        toLogin: false,
        toWishlist: false,
        email: "",
        password: "",
        confirmPassword:""
    };

    goToLogin = event =>{
        this.setState({
            toLogin: true
        })
    }

    goToWishlist = event =>{
        this.setState({
            toWishlist: true
        })
    }
    
    inputChange = event =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value})
    }

    submitForm = event =>{
        event.preventDefault();
        API.createUser({email: this.state.email, password: this.state.password}).then(function(res){console.log(res.data)});
        //let newUser = {email: this.state.email, password: this.state.password};
        //console.log(newUser);

        // this.goToWishlist();
    }

    render(){
        const {email} = this.props.match.params;
        if(this.state.toLogin === true){
            return <Redirect to="/login"/>
        }
        if(this.state.toWishlist === true){
            return <Redirect to={email + "/wishlist"}/>
        }
        return(
            <SignUpForm
            inputChange={this.inputChange}
            submitForm={this.submitForm}
            signIn={this.signIn}
            goToLogin={this.goToLogin}
            email={this.state.email}
            password={this.state.password}
            confirmPassword={this.state.confirmPassword}
            />
        )
    }

    
}
export default SignUp;