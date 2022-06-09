const {Model, DataTypes} = require('sequelize')
class Entregas extends Model{
    static init(connection){
        super.init({
            data:DataTypes.STRING,
            hora:DataTypes.STRING,
            status:DataTypes.STRING,
            entrega_descricao:DataTypes.STRING,
            observacao:DataTypes.INTEGER
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Usuarios, {foreignKey:'id_voluntario', as:'entrega_usuario'})
        this.belongsTo(models.Familias, {foreignKey:'id_familia', as:'entrega_familia'})
        this.belongsTo(models.Rotas, {foreignKey:'id_rota', as:'rota_voluntario'})
    }
}

module.exports = Entregas