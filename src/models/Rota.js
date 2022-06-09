const { Model, DataTypes} = require('sequelize')

class Rotas extends Model {
    static init(connection) {
        super.init({
            nome_rota: DataTypes.STRING,
            status: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = Rotas