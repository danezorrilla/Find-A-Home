const db = require("../models");

module.exports = {
    create: function(req, res){
        db.Wishlist
            .create(req.body)
            .then(dbWishlist => db.Users.findOneAndUpdate({email: req.params.email}, {wishlist: dbWishlist._id}, {new: true}))
            .then(dbUser => res.json(dbUser))
            .catch(err => res.status(422).json(err));
    },

    findAll: function(req, res){
        db.Wishlist
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err))
    }
}