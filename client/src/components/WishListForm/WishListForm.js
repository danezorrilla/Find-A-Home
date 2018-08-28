import React from "react";


const WishListForm = (props) =>
<div>
        <h1>Wish List</h1>
        <form>
          <h2>Customize your home</h2>
          <input type="checkbox" value="yard"/>
          <label>Yard</label>
          <br />
          
          <input type="checkbox" value="Garage"/>
          <label>Garage</label>
          <br />
          
          <input type="checkbox" value="Basement"/>
          <label>Basement</label>
          <br />
          
          <input type="checkbox" value="Pool"/>
          <label>Pool</label>
          <br />
          
          <input type="text" value={props.bedrooms} name="bedrooms" onChange={props.InputChange}/>
          <label>Bedrooms</label>
          <br />
          
          <input type="text" value={props.bathrooms} name="bathrooms" onChange={props.InputChange}/>
          <label>Bathrooms</label>
          <h2>Add Choices</h2>
          <input type="text" value="title" />
          <input type="submit" value="Submit" />
        </form>
      </div>

export default WishListForm