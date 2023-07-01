const mongoose = require('mongoose')

const statSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    softCap: {type: Array}
})

module.exports = mongoose.model("stats", statSchema)