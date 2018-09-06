const db = require("../models");

// Defining methods for the houseController
module.exports = {
  create: function(req, res) {
    db.Houses
      .create(req.body)
      .then(dbHouse => db.Users.findOneAndUpdate({email: req.params.email}, { $push: { houses: dbHouse._id }}, {new: true}))
      .then(dbUser => res.json(dbUser))
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Houses
      .find({email: req.params.email})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Houses
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Houses
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Houses
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
