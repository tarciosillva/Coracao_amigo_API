const {Model, DataTypes} = require('sequelize')
class Enderecos extends Model{
    static init(connection){
        super.init({
            municipio:DataTypes.STRING,
            bairro:DataTypes.STRING,
            rua:DataTypes.STRING,
            numero:DataTypes.INTEGER,
            geolocalizacao:DataTypes.STRING
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Usuarios, {foreignKey:'id_usuario', as:'endereco_usuario'})
        this.belongsTo(models.Familias, {foreignKey:'id_familia', as:'endereco_familia'})
    }
}

module.exports = Enderecos