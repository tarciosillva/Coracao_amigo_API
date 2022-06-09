const {Model, DataTypes} = require('sequelize')

class Familias extends Model{
    static init(connection){
        super.init({
            estado_atual:DataTypes.STRING,
            membros:DataTypes.INTEGER,
            renda_familiar:DataTypes.DOUBLE,
            programas_governo:DataTypes.STRING,
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Usuarios, {foreignKey:'id_usuario_criacao', as: 'usuario'})
        this.belongsTo(models.Rotas, {foreignKey:'id_rota', as: 'rota_familia'})
    }
}

module.exports = Familias