import React from "react";
import "./SignUpForm.css";


const SignUpForm = (props) => (
    <div className="background">
    <h1 className="uk-heading-line uk-text-center"><span>Sign up</span></h1>

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

    <div className="uk-margin">
        <div className="uk-inline">
            <span className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
            <input className="uk-input" data-type="text" name="confirmPassword" placeholder="Confirm Password" type="password" onChange = {props.inputChange} value={props.confirmPassword} />
        </div>
    </div>

        <p data-uk-margin>
            <button className="uk-button uk-button-default" type="submit" onClick={props.submitForm}>submit</button>
        </p>
        <p data-uk-margin>
            <button className="uk-button uk-button-default" type="submit" onClick={props.signIn}>sign in</button>
        </p>

    </form>
    </div>

);

export default SignUpForm;


