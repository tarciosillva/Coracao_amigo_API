const { Model, DataTypes} = require('sequelize')
class Dependente extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING,
            idade: DataTypes.INTEGER,
            parentesco: DataTypes.STRING,
            escolaridade: DataTypes.STRING,
            numero_roupa: DataTypes.INTEGER,
            numero_calcado: DataTypes.INTEGER,
        }, {
            sequelize: connection
        })
    }
    static associate(models) {
        this.belongsTo(models.Familia, {
            foreignKey: 'id_familia',
            as: 'dependente_familia'
        })
    }
}

module.exports = Dependente