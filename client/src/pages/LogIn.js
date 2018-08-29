import React,{Component} from "react";
import LogInForm from "../components/LogInForm";
import API from "../utils/API";

class  LogIn extends Component{
    state = {
        email: "",
        password: ""
        
    };
    
   componentDidMount(){

   }

   inputChange = event =>{
       const {name, value} = event.target;
       this.setState({
           [name]: value});
   }
    render(){
        return(
            <div>
                <LogInForm         
                    inputChange={this.inputChange}
                    submitForm={this.submitForm}
                    email={this.state.email}
                    password={this.state.password}
                />
            </div>    
        )
    }
    

    
}

export default LogIn;
