const classModel = require('../models/classes')

exports.createClass = (req, res) => {
    const classe = new classModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        stats: req.body.stats,
        description: req.body.description,
        equipement: req.body.equipement,
    })

    classe.save()
                .then(classe => res.status(201).json(classe))
                .catch(error => res.status(500).json(error))
}

exports.readClasses = (req, res) => {
    classModel.find()
                    .then(classe => res.status(200).json(classe))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneClass = (req, res) => {
    classModel.findOne({_id: req.params.id})
                        .then(classe => res.status(200).json(classe))
                        .catch(error => res.Status(404).json(error))
}

exports.updateOneClass = (req, res) => {
    classModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json(error))
}