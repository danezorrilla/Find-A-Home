import React from "react";
import "./DashboardComp.css";



const DashboardComp = props => (      
      <li>
        <div className="uk-card uk-card-default">
          <div className="uk-card-media-top">
            <img src={props.image} alt=""/>
          </div>
            <div className="uk-card-body">
              <p name="name" value={props.name}>name: {props.name}</p>
              <p name="address" value={props.address}>address: {props.address}</p>
              <p name="price" value={props.price}>price: {props.price}</p>
              {/* <p name="match" value={props.match}>match count</p> */}
              <div className="uk-card-footer">
                <a href="#" className="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
      </li>  
);

export default DashboardComp;