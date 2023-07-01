const express = require('express')
const mongoose = require('mongoose')

const bodyParser = require("body-parser")
const app = express()

mongoose.connect('mongodb+srv://sebastien:arakno1@cluster0.rwpnj1a.mongodb.net/',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const weaponsRoutes = require('./routes/weapons')
  const spellsRoutes = require('./routes/spells')
  const materialsRoutes = require('./routes/materials')
  const productsRoutes = require('./routes/products')
  const cookbooksRoutes = require('./routes/cookbooks')
  const objectsRoutes = require('./routes/object')
  const classRoutes = require('./routes/classes')
  const talismanRoutes = require('./routes/talisman')
  const armorRoutes = require('./routes/armors')
  const statRoutes = require('./routes/stats')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json())

app.use('/api', weaponsRoutes)
app.use('/api', spellsRoutes)
app.use('/api', materialsRoutes)
app.use('/api', productsRoutes)
app.use('/api', cookbooksRoutes)
app.use('/api', objectsRoutes)
app.use('/api', classRoutes)
app.use('/api', talismanRoutes)
app.use('/api', armorRoutes)
app.use('/api', statRoutes)

module.exports = app