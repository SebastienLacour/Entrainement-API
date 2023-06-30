const mongoose = require('mongoose')

const talismanSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    type: {type: String, required: true},
    weight: {type: Number, required: true},
    drop: {type: Array, required: true},
    effect: {type: String, required: true},
    description: {type: String, required: true},
    haveFound: {type: Boolean, required: true, default: false},
    usersFound: {type: Array}
})

module.exports = mongoose.model("talisman", talismanSchema)