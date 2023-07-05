const damageModel = require('../models/damages')

exports.createDamage = (req, res) => {

    const damage = new damageModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        type: req.body.type
    })
    damage.save()
    .then( damage => res.status(201).json(damage))
    .catch( error => res.status(500).error({error}))
}

exports.readDamage = (req, res) => {
    damageModel.find()
    .then( damage => res.status(200).json(damage))
    .catch( error => res.status(404).error({error}))
}

exports.readOneDamage = (req, res) => {
    damageModel.findOne({_id: req.params.id})
    .then( damage => res.status(200).json(damage))
    .catch( error => res.status(404).error({error}))
}

exports.updateOneDamage = (req, res) => {
    damageModel.updateOne({_id: req.params.id}, {...req.body})
    .then( damage => res.status(200).json(damage))
    .catch( error => res.status(404).error({error}))
}

exports.deleteOneDamage = (req, res) => {
    damageModel.deleteOne({_id: req.params.id}, {...req.body})
                    .then(() => res.status(200).json("item supprimé"))
                    .catch( error => res.status(404).json({error}))
}


