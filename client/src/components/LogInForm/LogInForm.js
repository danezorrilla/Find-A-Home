import React from "react";
import "./LogInForm.css";


const LogInForm = (props) => (
<div className="background-login" id="page-wrapper">

<h1 className="loginTitle uk-heading-line uk-text-center"><span>Login</span></h1>

<form className="formStyle">

<div className="uk-margin">
    <div className="uk-inline">
        <span className="uk-form-icon" data-uk-icon="icon: user"></span>
        <input className="uk-input" data-type="text" name="email" placeholder="Email" type="text" onChange = {props.inputChange} value={props.email} />
    </div>
</div>

<div className="uk-margin">
    <div className="uk-inline">
        <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
        <input className="uk-input" data-type="text" name="password" placeholder="Password" type="password" onChange = {props.inputChange} value={props.password} />
    </div>
</div>

    <p data-uk-margin>
        <button className="uk-button uk-button-default" type="submit" data-uk-icon="sign-in" onClick={props.submitForm}>Login</button>
        <button className="uk-button uk-button-default" onClick={props.goToSignup}>To SignUp</button>
    </p>



</form>

   
</div> 
)

export default LogInForm;