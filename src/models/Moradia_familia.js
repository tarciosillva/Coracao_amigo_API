const {Model, DataTypes} = require('sequelize')

class Moradia_familias extends Model{
    static init(connection){
        super.init({
            tipo_moradia:DataTypes.STRING,
            condicao_moradia:DataTypes.STRING,
            estrutura_moradia:DataTypes.STRING,
            qualidade_agua:DataTypes.STRING,
            qualidade_eletrica:DataTypes.STRING,
            foto:DataTypes.STRING
        },{
            sequelize:connection
        })
    }

    static associate(models){
        this.belongsTo(models.Familias, {foreignKey:'id_familia', as: 'moradia_familia'})
    }
}

module.exports = Moradia_familias