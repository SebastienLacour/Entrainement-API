const mongoose = require('mongoose')

const objectSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    type: {type: String, required: true},
    drop: {type: Array, required: true},
    description: {type: String, required: true},
    effect: {type: String, required: true}
})

module.exports = mongoose.model("object",objectSchema)