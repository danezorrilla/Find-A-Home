import React from "react";

const AddHouseForm = (props) =>
<div>
    <h1>Add House</h1>
    <form>
        <label>Photo URL:</label>
        <input type="text" name="photo" value={props.photo} onChange={props.inputChange}/>
        <br/>

        <label>Nickname:</label>
        <input/>
        <br/>

        <label>Price:</label>
        <input/>
        <br/>

        <label>Square Feet:</label>
        <input/>
        <br/>

        <label>Address:</label>
        <input/>
        <br/>

        <label>City:</label>
        <input/>
        <br/>

        <label>State:</label>
        <input/>
        <br/>

        <label>Zip:</label>
        <input/>
        <br/>

        <label>MLS:</label>
        <input/>
        <br/>

        <label>Yard:</label>
        <input type="checkbox"/>
        <br/>

        <label>Garage:</label>
        <input type="checkbox"/>
        <br/>

        <label>Basement:</label>
        <input type="checkbox"/>
        <br/>

        <label>Pool:</label>
        <input/>
        <br/>

        <label>Bathrooms:</label>
        <input/>
        <br/>

        <label>Bedrooms:</label>
        <input/>


    </form>
    <button onClick={props.submitForm}>Add House</button>
</div>

export default AddHouseForm;