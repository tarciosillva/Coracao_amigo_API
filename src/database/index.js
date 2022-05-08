const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Familia =  require('../models/Familia')
const Usuario =  require('../models/Usuario')
const Endereco =  require('../models/Endereco')
const Dependente =  require('../models/Dependente')
const Moradia_familia =  require('../models/Moradia_familia')
const Responsavel_familiar =  require('../models/Responsavel_familiar')
const Rota =  require('../models/Rota')

const connection = new Sequelize(dbConfig)

Familia.init(connection)
Usuario.init(connection)
Endereco.init(connection)
Dependente.init(connection)
Moradia_familia.init(connection)
Responsavel_familiar.init(connection)
Rota.init(connection)

Familia.associate(connection.models)
Endereco.associate(connection.models)
Dependente.associate(connection.models)
Moradia_familia.associate(connection.models)
Responsavel_familiar.associate(connection.models)
Rota.associate(connection.models)

module.exports = connection