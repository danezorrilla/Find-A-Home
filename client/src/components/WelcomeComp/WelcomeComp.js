import React from "react";
import "./WelcomeComp.css";


const WelcomeComp = (props) => (
<div className="welcome-page" id="page-wrapper">
    <h1 className="welcomeTitle uk-heading-line uk-text-center"><span>Welcome</span></h1>
    <p className="welcomeBtn" data-uk-margin>
        <button className="uk-button uk-button-default" data-uk-icon="sign-in" onClick={props.goToLogin}>login</button>
        <button className="uk-button uk-button-default" data-uk-icon="sign-in" onClick={props.goToSignup}>SignUp</button>
    </p>



    <div className="uk-child-width-1-3@m" data-uk-grid uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">
    <div>
        <div className="welcomeCard uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">1</h3>
            <p>Identify your goal.</p>
        </div>
    </div>
    <div>
        <div className="welcomeCard uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">2</h3>
            <p>Eliminate choices by setting standards.</p>
        </div>
    </div>
    <div>
        <div className="welcomeCard uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">3</h3>
            <p>Don't worry about finding the "best."</p>
        </div>
    </div>
    <div>
        <div className="welcomeCard uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">4</h3>
            <p>Be aware of biases.</p>
        </div>
    </div>
    <div>
        <div className="welcomeCard uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">5</h3>
            <p>Try not to rush.</p>
        </div>
    </div>
    <div>
        <div className="welcomeCard uk-card uk-card-default uk-card-body">
            <h3 className="uk-card-title">6</h3>
            <p>Don't sweat the small stuff.</p>
        </div>
    </div>
</div>

</div>

);

export default WelcomeComp;