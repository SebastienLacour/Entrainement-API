const mongoose = require('mongoose')

const damageSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    type: {type: String, required: true}
})

module.exports = mongoose.model("damages", damageSchema)