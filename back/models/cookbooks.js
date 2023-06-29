const mongoose = require('mongoose')

const cookbookSchema = mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: true},
    description: {type: String, required: true},
    drop: {type: Array, required: true},
    cooks: {type: Array, required: true},
    haveFound: {type: Boolean, required: true, default: false},
    usersFound: {type: Array}
})

module.exports = mongoose.model("cookbooks", cookbookSchema)