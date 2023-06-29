const productModel = require('../models/products')

exports.createProduct = (req, res) => {
    const product = new productModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        effect: req.body.effect,
        cookbook: req.body.cookbook,
        materials: req.body.materials,
        description: req.body.description,
    })

    product.save()
                .then(() => res.status(201).json(req.body))
                .catch(error => res.status(500).json({error}))
}

exports.readProducts = (req, res) => {
    productModel.find()
                    .then(product => res.status(200).json(product))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneProduct = (req, res) => {
    productModel.findOne({_id: req.params.id})
                        .then(product => res.status(200).json(product))
                        .catch(error => res.Status(404).json({error}))
}

exports.updateOneProduct = (req, res) => {
    productModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json({error}))
}