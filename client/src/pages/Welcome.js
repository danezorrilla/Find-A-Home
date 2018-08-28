import React from "react";

const Welcome = () => (
    <div>
    
    <div>
        <h1>Welcome</h1>
        <button bsStyle="primary">login</button>
        <button bsStyle="primary">SignUp</button>
    </div>
    <div className="uk-position-relative uk-visible-toggle uk-light" data-uk-slideshow="autoplay: true">

    <ul className="uk-slideshow-items">
        <li>
            <img src="https://img00.deviantart.net/9368/i/2009/319/e/f/hume_house_by_ozonablue.jpg" alt="" data-uk-cover/>
        </li>
        <li>
            <img src="https://img00.deviantart.net/ba2f/i/2012/232/6/b/gaudi_building_by_estruda-d5bragy.jpg" alt="" data-uk-cover/>
        </li>
    </ul>

    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next uk-slideshow-item="next"></a>

</div>
</div>

);

export default Welcome;