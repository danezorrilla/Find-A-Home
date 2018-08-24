var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var WishlistSchema = new Schema({
  // `title` must be of type String
  item:	String,
itemCategory:	String,
itemShortText:	String,
itemLongText:	String,
itemQualifier:	String,
itemQualifierPhrasing:	String,  
});

// This creates our model from the above schema, using mongoose's model method
var Wishlist = mongoose.model("Wishlist", WishlistSchema);

// Export the Wishlist model
module.exports = Wishlist;
