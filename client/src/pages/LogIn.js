import React,{Component} from "react";
import LogInForm from "../components/LogInForm";
import API from "../utils/API";
import { Redirect} from "react-router-dom"

class  LogIn extends Component{
    state = {
        toSignup: false,
        toDashboard: false,
        email: "",
        password: ""
        
    };
    
    goToSignup = event =>{
        this.setState({
            toSignup: true
        })
    }

    goToDashboard = event =>{
        this.setState({
            toDashboard: true
        })
    }
   
   inputChange = event =>{
       const {name, value} = event.target;

       this.setState({
           [name]: value});
   }

   submitForm = event =>{
        API.getUser(this.state.email).then(res => console.log(res));
       //this.goToDashboard()
   }

    render(){
        if(this.state.toSignup === true){
            return <Redirect to="/signup"/>
        }
        if(this.state.toDashboard === true){
            return <Redirect to="/dashboard"/>
        }
        return(
            <LogInForm         
                inputChange={this.inputChange}
                submitForm={this.submitForm}
                goToSignup={this.goToSignup}
                email={this.state.email}
                password={this.state.password}
            />  
        )
    }
    

    
}

export default LogIn;
