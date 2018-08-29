import React,{Component} from "react";
import LogInForm from "../components/LogInForm";
import API from "../utils/API";
import { Redirect} from "react-router-dom"

class  LogIn extends Component{
    state = {
        toSignup: false,
        email: "",
        password: ""
        
    };
    
    goToSignup = event =>{
        this.setState({
            toSignup: true
        })
    }
   

   inputChange = event =>{
       const {name, value} = event.target;

       this.setState({
           [name]: value});
   }
    render(){
        if(this.state.toSignup === true){
            return <Redirect to="/signup"/>
        }
        return(
            <div>
                <LogInForm         
                    inputChange={this.inputChange}
                    submitForm={this.submitForm}
                    goToSignup={this.goToSignup}
                    email={this.state.email}
                    password={this.state.password}
                />
            </div>    
        )
    }
    

    
}

export default LogIn;
