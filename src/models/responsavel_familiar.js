const Sequelize = require('sequelize')
const database=require('../database')

const Responsavel_familiar=database.sequelize.define('Responsavel_familiar',{
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
    estado_civil:{
        type:Sequelize.STRING,
        allowNull: false
    },
    profissao:{
        type:Sequelize.STRING,
        allowNull: false
    },
    ocupacao:{
        type:Sequelize.STRING,
        allowNull: false
    },
    escolaridade:{
        type:Sequelize.STRING,
        allowNull: false
    },
    numero_roupa:{
        type:Sequelize.INTEGER,
        allowNull: false
    },
    numero_calcado:{
        type:Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports={Responsavel_familiar}