const User = require('../models/Usuario')

class UserRepository {
    async newUser(user) {
        try {
            const result = await User.create(user)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async voluntaryId(id) {
        try {
            await User.findByPk(id).then((result) => {
                return result
            })
        } catch (error) {
            console.log(error)
        }
    }

    async listAllVoluntary() {
        try {
            const result = await User.findAll({
                where: {
                    perfil: 'Voluntario'
                },
                attributes: ['id', 'nome', 'email', 'senha', 'cpf', 'telefone', 'perfil']
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new UserRepository()