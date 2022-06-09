const {Model,DataTypes} = require('sequelize')
class Responsaveis_familiares extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            estado_civil: DataTypes.STRING,
            profissao: DataTypes.STRING,
            ocupacao: DataTypes.STRING,
            escolaridade: DataTypes.STRING,
            telefone: DataTypes.STRING,
            numero_roupa: DataTypes.INTEGER,
            numero_calcado: DataTypes.INTEGER,
        },{
            sequelize:connection
        })
    }
    static associate(models){
        this.belongsTo(models.Familias, {foreignKey:'id_familia', as:'responsavel_familia'})
    }
}

module.exports = Responsaveis_familiares