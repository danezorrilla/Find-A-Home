const router = require("express").Router();
const houseRoutes = require("./homes");
const userRoutes = require("./user");
const wishlistRoutes = require("./wishlist");

// homes routes
router.use("/user", userRoutes);
router.use("/house", houseRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
