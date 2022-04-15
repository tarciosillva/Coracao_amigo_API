const {Model, DataTypes} = require('sequelize')

class Familia extends Model{
    static init(connection){
        super.init({
            membros:DataTypes.INTEGER,
            renda_familiar:DataTypes.DOUBLE,
            programas_governo:DataTypes.STRING,
            data_cadastro:DataTypes.DATE
        },{
            sequelize:connection
        })
    }
}

/* const Familia = database.sequelize.define('Familia', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    membros: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    re   nda_familiar: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    programas_governo: {
        type: Sequelize.ARRAY
    },
    data_cadastro: {
        type: Sequelize.DATE,
        allowNull: false
    }
}) */

module.exports = Familia