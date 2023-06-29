const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
        name: {type: String, required: true},
        imageUrl: {type: String, required: true},
        cookbook: {type: Array, required: true},
        materials: {type: Array, required: true},
        description: {type: String, required: true},
    
})

module.exports = mongoose.model("product", productSchema)