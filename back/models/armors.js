const mongoose = require('mongoose')

const armorSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    weight: {type: Number, required: true},
    drop: {type: Array, requierd: true},
    defense: {type: Object, required: true},
    resistance: {type: Object, required: true},
    passive: {type: String, required: true},
    description: {type: String, required: true},
    isSet: {type: Boolean, required: true},
    pieces: {type: Object},
    haveFound: {type: Boolean, required: true},
    usersFound: {type: Array}
})

module.exports = mongoose.model("armors", armorSchema)