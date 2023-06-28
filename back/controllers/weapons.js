const weaponsModel = require('../models/weapons.js')

exports.createWeapons = (req, res) => {
    console.log("---------------CREATE WEAPON--------------")
    console.log(req.body)

    const weapon = new weaponsModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        type: req.body.type,
        weight: req.body.weight,
        attackType: req.body.attackType,
        skill: req.body.skill,
        passive: req.body.passive,
        damages: req.body.damages,
        defense: req.body.defense,
        stats: req.body.stats,
        scaling: req.body.scaling,
        drop: req.body.drop,
        upgrade: req.body.upgrade,
        infused: req.body.infused,
        description: req.body.description,
        haveFound: req.body.haveFound,
        usersFound: req.body.usersFound
    })

    console.log(weapon)
    weapon.save()
        .then(() => res.status(201).json({message : "arme créée"}))
        .catch( error => res.status(500).json({error}))
}

exports.readWeapons = (req, res) => {

    weaponsModel.find()
                        .then(weapon => res.status(200).json(weapon))
                        .catch(error => res.status(404).json(error))
}

exports.readOneWeapon = (req, res) => {

    weaponsModel.findOne({_id: req.params.id})
                            .then(weapon => res.status(200).json(weapon))
                            .catch(error => res.status(404).json(error))
}

exports.updateOneWeapon = (req, res) => {
    console.log(req.params.id)
    weaponsModel.updateOne({_id: req.params.id}, {...req.body})
                                .then(weapon => res.status(200).json(req.body))
                                .catch(error => res.status(404).json({error}))
}

exports.deleteOneWeapon = (req, res) => {

}