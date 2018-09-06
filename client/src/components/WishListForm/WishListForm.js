import React from "react";
import "./WishListForm.css"

  
  const WishListForm = (props) => (
    // <div>
    //   Yard:
    //   <input type="checkbox" name="yard" checked={props.yard} onChange={props.checkboxChange}/><br/>
    //   Garage:
    //   <input type="checkbox" name="garage" checked={props.garage} onChange={props.checkboxChange}/><br/>
    //   Basement:
    //   <input type="checkbox" name="basement" checked={props.basement} onChange={props.checkboxChange}/><br/>
    //   Pool:
    //   <input type="checkbox" name="pool" checked={props.pool} onChange={props.checkboxChange}/><br/>
    //   Bedrooms:
    //   <input type="number" name="bedrooms" value={props.bedrooms} onChange={props.inputChange}/><br/>
    //   Bathrooms:
    //   <input type="number" name="bathrooms" value={props.bathrooms} onChange={props.inputChange}/><br/>
    //   <br/>
    //   <button type="submit" onClick={props.submitForm}>Submit</button>
    // </div>


    <div className="background-wishlist" id="page-wrapper">
    <h1 className="addHouseTitle uk-heading-line uk-text-center"><span>Wish List</span></h1>
    <form className="form-width">
        <fieldset className="uk-fieldset">
                <label>Square Feet:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="number" name="indoorsquarefeet" value={props.indoorsquarefoot} onChange={props.inputChange} placeholder="enter a number"/>
                </div>
                {/* ======= */}
                <div className="uk-margin addHouse-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label>Yard: <input className="uk-checkbox" type="checkbox" name="yard" checked={props.yard} onChange={props.checkboxChange}/></label>
                    <label>Garage: <input className="uk-checkbox" type="checkbox" name="garage" checked={props.garage} onChange={props.checkboxChange}/></label>
                    <label>Basement: <input className="uk-checkbox" type="checkbox" name="basement" checked={props.basement} onChange={props.checkboxChange}/></label>
                    <label>Pool: <input className="uk-checkbox" type="checkbox" name="pool" checked={props.pool} onChange={props.checkboxChange}/></label>
                </div>
                {/* ======= */}
                <label>Bedrooms:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="number" name="bedrooms" value={props.bedrooms} onChange={props.inputChange} placeholder=""/>
                </div>
                <label>Bathrooms:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="number" name="bathrooms" value={props.bathrooms} onChange={props.inputChange} placeholder=""/>
                </div>
        </fieldset>
        <button className="uk-button uk-button-default add-house-btn" onClick={props.submitForm}>Submit Wish List</button>
    </form>
</div>
  );
export default WishListForm;

