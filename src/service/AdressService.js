const AdressRepository = require('../Repository/AdressRepository')
class AdressService {
    async newAdressUser(adress, userId) {
        try {
            const res = await AdressRepository.newAdress({
                ...adress,
                id_usuario: userId
            })
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async newAdressFamily(adress, familyId) {
        try {
            const res = await AdressRepository.newAdress({
                ...adress,
                id_familia: familyId
            })
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listAdressUser(userId) {
        try {
            const res = await AdressRepository.listAdressUser(userId)
            return res
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = new AdressService()