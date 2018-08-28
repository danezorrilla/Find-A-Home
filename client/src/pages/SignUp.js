import React, { Component } from "react";

var app = express();
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", function(req, res) {
    User.create(req.body)
    .then(function(dbUser) {
      res.json(dbUser);
    })
    .catch(function(err) {
      res.json(err);
    });
  });

class  SignUp extends Component{
    state = {
        email: "",
        password: "",
        confirmPassword:""
    };
    
    inputChange = event =>{
        this.setState({email: event.target.value});
        this.setState({password: event.target.value});
        this.setState({confirmPassword: event.target.value});
    }
    render(){
        return(

            
            <div>
            <h1>Signup</h1>
            <input placeholder="email" type ="text" value = {this.state.inputChange}/>
            <input placeholder="Password" type ="password" value = {this.state.inputChange}/>
            <input placeholder="confirmPassword" type ="password" value = {this.state.inputChange}/>
            <button bsstyle="primary">submit</button>
            </div>
        )
    }

    
}



export default SignUp;