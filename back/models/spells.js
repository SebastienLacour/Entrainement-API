const mongoose = require("mongoose")

const spellSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    type: {type: String, required: true},
    FPcost: {type: Number, required: true},
    staminaCost: {type: Number, required: true},
    slot: {type: Number, required: true},
    stats: {type: Object, required: true},
    effect: {type: String, required: true},
    drop: {type: Array, required: true},
    description: {type: String, required: true},
    haveFound: {type: Boolean, required: true, default: false},
    usersFound: {type: Array}
})

module.exports = mongoose.model("spell", spellSchema)
