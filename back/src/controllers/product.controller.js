const genericCrud = require('./generic.controller')
const { Product } = require ('../model')

module.exports = {
    ...genericCrud(Product)
}