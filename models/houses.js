var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var HousingSchema = new Schema({
  // `title` must be of type String
photo:	String,
nickname:	String,
price:	Number,
indoorsquarefoot:	Number,
address:	String,
// city:	String,
// State:	String,
// zip:	Number,
// mls:	Number,
// houseid:	ObjectId,
// userid:	Schema.Types.UserId,
// other:	[
//   {item: string, weight: number}
// ],
// wishlistArray: [
//   {item: string,
//     itemWeight: number,
//     itemScore,
//     ItemNumber: {type: Schema.Types.ObjectId,
//     ref: "wishlist"},
//     itemCategory: string,
//     itemQualifier}
    
// ]

yard: Boolean,
garage: Boolean,
basement: Boolean,
pool: Boolean,
bedrooms:	Number,
bathrooms:	Number

});

// This creates our model from the above schema, using mongoose's model method
var Housing = mongoose.model("Housing", HousingSchema);

// Export the Housing model
module.exports = Housing;
