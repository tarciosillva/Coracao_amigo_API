const Sequelize = require('sequelize')
const database = require('../database')

const Moradia_familia = database.sequelize.define('Moradia_familia', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_moradia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estrutura_moradia: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qualidade_agua: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qualidade_eletrica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports={Moradia_familia}