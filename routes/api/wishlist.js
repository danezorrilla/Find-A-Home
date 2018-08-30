const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

router.route("/:email")
    .post(wishlistController.create);

module.exports = router