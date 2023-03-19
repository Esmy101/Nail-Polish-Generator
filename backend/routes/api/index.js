const router = require("express").Router();
const userRoutes = require("./userRoutes");
const polishRoutes = require("./polishRoutes");

router.use("/user", userRoutes);
router.use("/polish", polishRoutes);

module.exports = router;