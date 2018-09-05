import React from "react";

const AddHouseForm = (props) =>
<div>
    <h1>Add House</h1>
    <form>
        <label>Photo URL:</label>
        <input type="text" name="photo" value={props.photo} onChange={props.inputChange}/>
        <br/>

        <label>Nickname:</label>
        <input type="text" name="nickname" value={props.nickname} onChange={props.inputChange}/>
        <br/>

        <label>Price:</label>
        <input type="number" name="price" value={props.price} onChange={props.inputChange}/>
        <br/>

        <label>Square Feet:</label>
        <input type="number" name="indoorsquarefoot" value={props.indoorsquarefoot} onChange={props.inputChange}/>
        <br/>

        <label>Address:</label>
        <input type="text" name="address" value={props.address} onChange={props.inputChange}/>
        <br/>

        <label>Yard:</label>
        <input type="checkbox" name="yard" checked={props.yard} onChange={props.checkboxChange}/>
        <br/>

        <label>Garage:</label>
        <input type="checkbox" name="garage" checked={props.garage} onChange={props.checkboxChange}/>
        <br/>

        <label>Basement:</label>
        <input type="checkbox" name="basement" checked={props.basement} onChange={props.checkboxChange}/>
        <br/>

        <label>Pool:</label>
        <input type="checkbox" name="pool" checked={props.pool} onChange={props.checkboxChange}/>
        <br/>

        <label>Bedrooms:</label>
        <input type="number" name="bedrooms" value={props.bedrooms} onChange={props.inputChange}/>
        <br/>

        <label>Bathrooms:</label>
        <input type="number" name="bathrooms" value={props.bathrooms} onChange={props.inputChange}/>


    </form>
    <button onClick={props.submitForm}>Add House</button>

</div>

export default AddHouseForm;