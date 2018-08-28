const router = require("express").Router();
const booksController = require("../../controllers/houseController");

// Matches with "/api/signin"
router.route("/signin")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
