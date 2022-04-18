const {Model, DataTypes} = require('sequelize')
class Endereco_familia extends Model{
    static init(connection){
        super.init({
            municipio:DataTypes.STRING,
            rua:DataTypes.STRING,
            numero:DataTypes.INTEGER,
            geolocalizacao:DataTypes.STRING
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey:'id_usuario', as:'endereco_usuario'})
        this.belongsTo(models.Familia, {foreignKey:'id_familia', as:'endereco_familia'})
    }
}

module.exports = Endereco_familia