const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

router.route("/:email")
    .get(wishlistController.findAll)
    .post(wishlistController.create);

module.exports = router