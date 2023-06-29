const mongoose = require('mongoose')

const classesSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    descrption: {type: String, required: true},
    stats: {type: Array, required: true},
    equipement: {type: Object, required: true}
})

module.exports = mongoose.model("class", classesSchema)