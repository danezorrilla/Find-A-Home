import React from "react";
import "./DashboardComp.css";



const DashboardComp = props => (
  <div className="home-list">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Address:</strong> {props.address}
        </li>
        <li>
          <strong>Price:</strong> {props.price}
        </li>
        <li>
          <strong>Matches:</strong> {props.match}
        </li>
      </ul>
    </div>
    
    <span onClick={() => props.addComment(props.id)} className="comment">
    𝘅
    </span>
  </div>
);

export default DashboardComp;