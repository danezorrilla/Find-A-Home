import React from "react";

const SignUpForm = (props) =>
<div>
    <h1>Signup</h1>
    <input name="email" placeholder="email" type ="text" onChange = {props.inputChange} value={props.email}/>
    <input name="password" placeholder="Password" type ="password" onChange = {props.inputChange} value={props.password}/>
    <input name="confirmPassword" placeholder="confirmPassword" type ="password" onChange = {props.inputChange} value={props.confirmPassword}/>
    <button bsStyle="primary" type="submit" onClick={props.submitForm}>submit</button>
</div>

export default SignUpForm