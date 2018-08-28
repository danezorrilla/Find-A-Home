import React from "react";

const WelcomeComp = (props) => 
<div>
<h1>Welcome</h1>
<button bsStyle="primary" onClick={props.goToLogin}>login</button>
<button bsStyle="primary" onClick={props.goToSignup}>SignUp</button>
</div>

export default WelcomeComp