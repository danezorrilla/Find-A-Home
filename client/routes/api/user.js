const router = require("express").Router();
const userController = require("../../../userController");

// Matches with "/api/user"
router.route("/user")
  .post(userController.create)
  .get(userController.findById);

// Matches with "/api/signin"
router.route("/signin")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
