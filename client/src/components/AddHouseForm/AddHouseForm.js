import React from "react";
import "./AddHouseForm.css";


const AddHouseForm = (props) => (
<div className="background-addHouse" id="page-wrapper">
    <h1 className="addHouseTitle uk-heading-line uk-text-center"><span>Add House</span></h1>
    <form className="form-width">
        <fieldset className="uk-fieldset">
                <label>Photo URL:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="text" name="photo" value={props.photo} onChange={props.inputChange} placeholder="website url"/>
                </div>
                <label>Nickname:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="text" name="nickname" value={props.nickname} onChange={props.inputChange} placeholder="Brick House ex."/>
                </div>
                <label>Price:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="text" name="price" value={props.price} onChange={props.inputChange} placeholder="$100,000"/>
                </div>
                <label>Square Feet:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="text" name="indoorsquarefeet" value={props.indoorsquarefoot} onChange={props.inputChange} placeholder="enter a number"/>
                </div>
                <label>Address:</label>
                <div className="uk-margin addHouse-margin">
                    <input className="uk-input uk-form-width-large" type="text" name="address" value={props.AddHouseForm} onChange={props.inputChange} placeholder="add address"/>
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
        <button className="uk-button uk-button-default add-house-btn" onClick={props.submitForm}>Submit House</button>
    </form>
</div>
)
export default AddHouseForm;