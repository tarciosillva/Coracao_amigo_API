const Voluntary = require('../models/Usuario')

class VoluntaryRepository {
    async newVoluntary(objectVoluntary) {
        try {
            const result = await Voluntary.create(objectVoluntary)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async voluntaryId(id) {
        try {
            await Voluntary.findByPk(id).then((result) => {
                return result
            })
        } catch (error) {
            console.log(error)
        }
    }

    async listAllVoluntary() {
        try {
            const result  = await Voluntary.findAll({
                attributes:['id','nome','email','senha','cpf','telefone']
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new VoluntaryRepository()