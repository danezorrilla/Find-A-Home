import React from "react";
import "./WishListForm.css"

  
  const WishListForm = (props) => (
    <div>
      Yard:
      <input type="checkbox" name="yard" checked={props.yard} onChange={props.checkboxChange}/><br/>
      Garage:
      <input type="checkbox" name="garage" checked={props.garage} onChange={props.checkboxChange}/><br/>
      Basement:
      <input type="checkbox" name="basement" checked={props.basement} onChange={props.checkboxChange}/><br/>
      Pool:
      <input type="checkbox" name="pool" checked={props.pool} onChange={props.checkboxChange}/><br/>
      Bedrooms:
      <input type="number" name="bedrooms" value={props.bedrooms} onChange={props.inputChange}/><br/>
      Bathrooms:
      <input type="number" name="bathrooms" value={props.bathrooms} onChange={props.inputChange}/><br/>
      <br/>
      <button type="submit" onClick={props.submitForm}>Submit</button>
    </div>
  );
export default WishListForm;

