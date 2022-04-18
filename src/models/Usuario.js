const {Model, DataTypes} = require('sequelize')

class Usuario extends Model{
    static init(connection){
        super.init({
            nome:DataTypes.STRING,
            email:DataTypes.STRING,
            senha:DataTypes.STRING,
            cpf:DataTypes.STRING,
            telefone:DataTypes.STRING,
        },{
            sequelize:connection
        })
    }
}

module.exports = Usuario