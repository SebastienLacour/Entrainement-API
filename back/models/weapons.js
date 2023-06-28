const mongoose = require('mongoose')

const weaponSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    type: {type: String, required: true},
    weight: {type: Number, required: true},
    attackType: {type: Array, required: true},
    skill: {type: Object, required: true},
    passive: {type: String, required: true},
    damages: {type: Object, required: true},
    defense: {type: Object, required: true},
    stats: {type: Object, required: true},
    scaling: {type: Object, required: true},
    drop: {type: Array, required: true},
    upgrade: {type: String, required: true},
    infused: {type: Boolean, required: true},
    description: {type: String, required: true},
    haveFound: {type: Boolean, required: true, default: false},
    usersFound: {type: Array}
})

module.exports = mongoose.model("weapon", weaponSchema)