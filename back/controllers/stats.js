const statModel = require("../models/stats")

exports.createStat = (req, res) => {
    const stat = new statModel({
        name: req.body.name,
        description: req.body.description,
        softCap: req.body.softCap
    })

    stat.save()
                .then(stat => res.status(201).json(stat))
                .catch(error => res.status(500).json(error))
}

exports.readStat = (req, res) => {
    statModel.find()
                    .then(stat => res.status(200).json(stat))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneStat = (req, res) => {
    statModel.findOne({_id: req.params.id})
                        .then(stat => res.status(200).json(stat))
                        .catch(error => res.Status(404).json(error))
}

exports.updateOneStat = (req, res) => {
    statModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json(error))
}