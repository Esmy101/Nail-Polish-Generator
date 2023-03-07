const router = require("express").Router();

const {
    getUser,
    signup
} = require("../../controllers/UserController.js")

router.route('/').get(getUser)
router.route('/signup').put(signup)

module.exports = router;