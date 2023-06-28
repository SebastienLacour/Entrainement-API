const spellModel = require('../models/spells')

exports.createSpell = (req, res) => {
    const spell = new spellModel({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        type: req.body.type,
        FPcost: req.body.FPcost,
        staminaCost: req.body.staminaCost,
        stats: req.body.stats,
        effect: req.body.effect,
        drop: req.body.drop,
        description: req.body.description,
        haveFound: req.body.haveFound,
        usersFound: req.body.usersFound
    })

    spell.save()
            .then(() => res.status(201).json({message: "sort créée"}))
            .catch(error => res.status(500).json({error}))
}

exports.readSpells = (req, res) => {
    spellModel.read()
                .then(spell => res.status(200).json(spell))
                .catch(error => res.status(404).json(error))
}