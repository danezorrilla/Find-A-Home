import React,{Component} from "react";
import SignUpForm from "../components/SignUpForm";
import API from "../utils/API";

class SignUp extends Component{
    state = {
        email: "",
        password: "",
        confirmPassword:""
    };

    componentDidMount(){

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

    }

    render(){
        return(

            <div>
                <SignUpForm
                inputChange={this.inputChange}
                submitForm={this.submitForm}
                signIn={this.signIn}
                email={this.state.email}
                password={this.state.password}
                confirmPassword={this.state.confirmPassword}
                />
            </div>
        )
    }

    
}



export default SignUp;