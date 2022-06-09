const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Familias =  require('../models/Familia')
const Usuarios =  require('../models/Usuario')
const Enderecos =  require('../models/Endereco')
const Dependentes =  require('../models/Dependente')
const Moradia_familias =  require('../models/Moradia_familia')
const Responsaveis_familiares =  require('../models/Responsavel_familiar')
const Rotas =  require('../models/Rota')
const Entregas = require('../models/Entregas')

const connection = new Sequelize(dbConfig)

Familias.init(connection)
Usuarios.init(connection)
Enderecos.init(connection)
Dependentes.init(connection)
Moradia_familias.init(connection)
Responsaveis_familiares.init(connection)
Rotas.init(connection)
Entregas.init(connection)

Familias.associate(connection.models)
Enderecos.associate(connection.models)
Dependentes.associate(connection.models)
Moradia_familias.associate(connection.models)
Responsaveis_familiares.associate(connection.models)
Entregas.associate(connection.models)

module.exports = connection