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
<<<<<<< HEAD

        if(this.state.email === "") {
            alert("please enter valid email");
        }else if(this.state.password !== this.state.confirmPassword){
            alert(" passwords do not match");
        }else{
            this.goToWishlist();
        }
          
=======
        //let newUser = {email: this.state.email, password: this.state.password};
        //console.log(newUser);

        // this.goToWishlist();
>>>>>>> 13963730fc4cc50e7b67d2358c5bae1b414b8ad4
    }

    render(){
        
        if(this.state.toWishlist === true){
            return <Redirect to={this.state.email + "/wishlist"}/>
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