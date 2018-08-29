const router = require("express").Router();
const userRoutes = require("./user");

// homes routes
router.use("/user", userRoutes);
router.use("/house", houseRoutes);

module.exports = router;
