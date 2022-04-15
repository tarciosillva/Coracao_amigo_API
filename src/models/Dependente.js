const Sequelize = require('sequelize')
const database=require('../database')

const Dependente=database.sequelize.define('Dependente',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    idade:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    parentesco:{
        type:Sequelize.STRING
    },
    escolaridade:{
        type:Sequelize.STRING
    },
    numero_roupa:{
        type:Sequelize.INTEGER
    },
    numero_calcado:{
        type:Sequelize.INTEGER
    }
})

module.exports = {Dependente}