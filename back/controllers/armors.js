const armorModel = require("../models/armors")

exports.createArmor = (req, res) => {
    const armor = new armorModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        weight: req.body.weight,
        defense: req.body.defense,
        resistance: req.body.resistance,
        passive: req.body.passive,
        description: req.body.description,
        drop: req.body.drop,
        isSet: req.body.isSet,
        pieces: req.body.pieces,
        haveFound: req.body.haveFound,
        usersFound: req.body.usersFound
    })

    armor.save()
                .then(armor => res.status(201).json(armor))
                .catch(error => res.status(500).json(error))
}

exports.readArmor = (req, res) => {
    armorModel.find()
                    .then(armor => res.status(200).json(armor))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneArmor = (req, res) => {
    armorModel.findOne({_id: req.params.id})
                        .then(armor => res.status(200).json(armor))
                        .catch(error => res.Status(404).json(error))
}

exports.updateOneArmor = (req, res) => {
    armorModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json(error))
}