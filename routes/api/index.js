const router = require("express").Router();
const bookRoutes = require("./books");

// Matches with /api
router.use("/books", bookRoutes);

module.exports = router;