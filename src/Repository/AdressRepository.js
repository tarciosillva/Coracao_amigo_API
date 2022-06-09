const Adress = require('../models/Endereco')
const Op = require('sequelize').Op;


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
            const result = await Adress.findOne({
                where: {
                    id_usuario: userId
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async listAdressFamily(familyId) {
        try {
            const result = await Adress.findOne({
                where: {
                    id_familia: familyId
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async listCordinatesGeolocalizationFamilyAdress() {
        try {
            const result = await Adress.findAll({
                where: {
                    id_familia: {
                        [Op.ne]: null
                    }
                },
                attributes: ['geolocalizacao', 'bairro', 'rua', 'numero']
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new AdressRepository()