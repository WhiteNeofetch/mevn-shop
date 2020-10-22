const router = require ('express-promise-router') ()

const { product } = require ('../controllers')

router.route('/:id').get(product.get)
router.route('/').post(product.create)
router.route('/').get(product.getAll)
router.route('/:id').put(product.update)
router.route('/:id').delete(product.delete)

module.exports = router