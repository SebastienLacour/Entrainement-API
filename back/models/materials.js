const mongoose = require('mongoose')

const materialModel = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    drop: {type: Array, required: true},
    products: {type: Array, required: true},
    description: {type: String, required: true},
})

module.exports = mongoose.model("materials", materialModel)