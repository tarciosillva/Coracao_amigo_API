const { Model, DataTypes} = require('sequelize')

class Rota extends Model {
    static init(connection) {
        super.init({
            nome_rota: DataTypes.STRING,
            status: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
    static associate(models) {
        this.belongsTo(models.Familia, { foreignKey: 'id_familia',as: 'rota_familia'})
        this.belongsTo(models.Usuario, { foreignKey: 'id_voluntario',as: 'rota_voluntarios'})
    }
}

module.exports = Rota