const materialModel = require("../models/materials")

exports.createMaterial = (req, res) => {
    const material = new materialModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        drop: req.body.drop,
        products: req.body.products,
        description: req.body.description,
    })

    material.save()
                .then(material => res.status(201).json(material))
                .catch(error => res.status(500).json({error}))
}

exports.readMaterial = (req, res) => {
    materialModel.find()
                    .then( material => res.status(200).json(material))
                    .catch( error => res.status(404).json({error}))
}

exports.readOneMaterial = (req, res) => {
    materialModel.findOne({_id: req.params.id})
                        .then(material => res.status(200).json(material))
                        .catch(error => res.status(404).json({error}))
}

exports.updateOneMaterial = (req, res) => {
    materialModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(material => res.status(200).json({material}))
                        .catch(error => res.status(404).json({error}))
}