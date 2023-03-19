const router = require("express").Router();
const {authMiddleware} = require("../../utils/auth");

const {
    getAllPolishes,
    findPolish,
    addPolish,
    removePolish,
    modifyPolish,
} = require('../../controllers/polishController')

router.route('/').get(authMiddleware, getAllPolishes)
router.route('/find/category/:category').get(authMiddleware, findPolish)
router.route('/find/type/:type').get(authMiddleware, findPolish)

router.route('/add').post(authMiddleware, addPolish)

router.route('/remove/:polishID').delete(authMiddleware, removePolish)

router.route('/update/:polishID').put(authMiddleware, modifyPolish)

module.exports = router;