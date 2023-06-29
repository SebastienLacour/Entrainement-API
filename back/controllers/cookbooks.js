const cookbookModel = require("../models/cookbooks")

exports.createCookbook = (req, res) => {
    const cookbook = new cookbookModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        description: req.body.description,
        drop: req.body.drop,
        cooks: req.body.cooks,
        haveFound: req.body.haveFound,
        usersFound: req.body.usersFound
    })

    cookbook.save()
                .then(cookbook => res.status(201).json(cookbook))
                .catch(error => res.status(500).json(error))
}

exports.readCookbooks = (req, res) => {
    cookbookModel.find()
                    .then(cookbooks => res.status(200).json(cookbooks))
                    .catch(error => res.status(404).json({error}))
}

exports.readOneCookbook = (req, res) => {
    cookbookModel.findOne({_id: req.params.id})
                        .then(cookbook => res.status(200).json(cookbook))
                        .catch(error => res.Status(404).json(error))
}

exports.updateOneCookbook = (req, res) => {
    cookbookModel.updateOne({_id: req.params.id}, {...req.body})
                        .then(() => res.status(200).json(req.body))
                        .catch(error => res.status(404).json(error))
}