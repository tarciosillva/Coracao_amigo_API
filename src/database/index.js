const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Familia =  require('../models/Familia')

const connection = new Sequelize(dbConfig)

Familia.init(connection)

module.exports = connection