var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var WishlistSchema = new Schema({
  // `title` must be of type String
// item:	String,
// itemCategory:	String,
// itemShortText:	String,
// itemLongText:	String,
// itemQualifier:	String,
// itemQualifierPhrasing:	String,
yard: {type: Boolean, required: true},
garage: {type: Boolean, required: true},
basement: {type: Boolean, required: true},
pool: {type: Boolean, required: true},
bedrooms: {type: Number, required: true},
bathrooms: {type: Number, required: true}
});

// This creates our model from the above schema, using mongoose's model method
var Wishlist = mongoose.model("Wishlist", WishlistSchema);

// Export the Wishlist model
module.exports = Wishlist;
