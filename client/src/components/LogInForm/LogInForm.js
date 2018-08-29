import React from "react";

const LogInForm = (props) =>
<div>
    <h1>Login</h1>
    <input name ="email" placeholder="email" type="text" onChange = {props.inputChange} value = {props.email}/>
    <input name="password" placeholder="password" type="password" onChange ={props.inputChange} value ={props.password}/>
    <button bsStyle="primary" type="submit" onClick={props.submitForm}>submit</button>
    <button className="uk-button uk-button-default" onClick={props.goToSignup}>SignUp</button>
</div> 

export default LogInForm;