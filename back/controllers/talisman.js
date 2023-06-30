const talismanModel = require("../models/talisman")

exports.createTalisman = (req, res) => {
    const talisman = new talismanModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        type: req.body.type,
        weight: req.body.weight,
        effect: req.body.effect,
        description: req.body.description,
        drop: req.body.drop,
        haveFound: req.body.haveFound,
        usersFound: req.body.usersFound
    })

    talisman.save()
                .then(talisman => res.status(201).json(talisman))
                .catch(error => res.status(500).json(error))
}

exports.readTalisman = (req, res) => {
    talismanModel.find()
                    .then(talisman => res.status(200).json(talisman))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneTalisman = (req, res) => {
    talismanModel.findOne({_id: req.params.id})
                        .then(talisman => res.status(200).json(talisman))
                        .catch(error => res.Status(404).json(error))
}

exports.updateOneTalisman = (req, res) => {
    talismanModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json(error))
}