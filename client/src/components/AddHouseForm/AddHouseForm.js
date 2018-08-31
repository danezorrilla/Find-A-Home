import React from "react";

const AddHouseForm = (props) =>
<div>
    <h1>Add House</h1>
    <button onClick={props.submitForm}>Add House</button>
<br/>
<br/>
    <label>Photo: </label>
    <input type="text" name="yard"/><br/>
    <label>Nickname: </label>
    <input type="text" name="nickname"/><br/>
    <label>Price: </label>
    <input type="text" name="price"/><br/>
    <label>Indoor Square Footage: </label>
    <input type="text" name="sqft"/><br/>
    <label>Bathrooms: </label>
    <input type="text" name="bathroom"/><br/>
    <label>Bedrooms: </label>
    <input type="text" name="bedroom"/><br/>
    <label>Address: </label>
    <input type="text" name="address"/><br/>
    <label>City: </label>
    <input type="text" name="city"/><br/>
    <label>State: </label>
    <input type="text" name="state"/><br/>
    <label>Zip: </label>
    <input type="text" name="zip"/><br/>
    <label>MLS: </label>
    <input type="text" name="mls"/><br/>
</div>

export default AddHouseForm;