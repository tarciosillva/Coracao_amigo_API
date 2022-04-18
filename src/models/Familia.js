const {Model, DataTypes} = require('sequelize')

class Familia extends Model{
    static init(connection){
        super.init({
            membros:DataTypes.INTEGER,
            renda_familiar:DataTypes.DOUBLE,
            programas_governo:DataTypes.STRING,
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.hasOne(models.Usuario, {foreignKey:'id_usuario_criacao', as: 'usuario_criador_familia'})
    }
}

module.exports = Familia