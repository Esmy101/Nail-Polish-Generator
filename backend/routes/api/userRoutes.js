const router = require("express").Router();

const {
    getUser,
    signup,
    login
} = require("../../controllers/UserController.js")

const {authMiddleware} = require("../../utils/auth");

router.route('/').get(getUser)
router.route('/signup').put(signup)
router.route('/login').put(login)

module.exports = router;