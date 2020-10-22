const genericCrud = require('./generic.controller')
const { Category } = require ('../model')

module.exports = {
    ...genericCrud(Category)
}