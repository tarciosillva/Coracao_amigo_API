const Adress = require('../models/Endereco')

class AdressRepository {
    async newAdress(objectAdress) {
        try {
            const result = await Adress.create(objectAdress)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listAdressUser(userId) {
        try {
            await Adress.findByPk(userId).then((result) => {
                return result
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AdressRepository()