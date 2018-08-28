const router = require("express").Router();
const userRoutes = require("./user");

// homes routes
router.use("/user", userRoutes);

module.exports = router;
