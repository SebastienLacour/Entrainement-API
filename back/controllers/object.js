const objectModel = require('../models/objects')

exports.createObject = (req, res) => {
    const object = new objectModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        type: req.body.type,
        description: req.body.description,
        drop: req.body.drop,
        effect: req.body.effect,

    })

    object.save()
                .then(object => res.status(201).json(object))
                .catch(error => res.status(500).json(error))
}

exports.readObjects = (req, res) => {
    objectModel.find()
                    .then(object => res.status(200).json(object))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneObject = (req, res) => {
    objectModel.findOne({_id: req.params.id})
                        .then(object => res.status(200).json(object))
                        .catch(error => res.Status(404).json(error))
}

exports.updateOneObject = (req, res) => {
    objectModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json(error))
}