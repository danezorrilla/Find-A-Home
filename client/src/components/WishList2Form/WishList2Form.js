import React from "react";
import "./WishList2Form.css"

  
  const WishList2Form = (props) => (
<div className="form-group">
        <form>
          <input type="checkbox" onChange={props.handleCheckBox}name={props.feature} value={props.feature} data-id={props.id}/>
          <label>{props.feature}</label>
          <br />
        </form>
      </div>
  );
export default WishList2Form;

