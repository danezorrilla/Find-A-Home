const router = require("express").Router();
const wishlistController = require("../../controllers/wishlistController");

router.route("/")
    .post(wishlistController.create);

module.exports = router