const router = require("express").Router();
const {authMiddleware} = require("../../utils/auth");

const {
    getAllPolishes,
    findPolish,
    addPolish,
    removePolish,
} = require('../../controllers/polishController')

router.route('/').get(authMiddleware, getAllPolishes)
router.route('/find/category/:category').get(authMiddleware, findPolish)
router.route('/find/type/:type').get(authMiddleware, findPolish)
router.route('/add').get(authMiddleware, addPolish)
router.route('/remove/:polishID').delete(authMiddleware, removePolish)

module.exports = router;