import React from "react";


  
  const WishListForm = (props) => (
<div className="form-group">
        <form>
          <input type="checkbox" onChange={props.handleCheckBox}name={props.feature} value={props.feature} data-id={props.id}/>
          <label>{props.feature}</label>
          <br />
        </form>
      </div>
  );
export default WishListForm;

