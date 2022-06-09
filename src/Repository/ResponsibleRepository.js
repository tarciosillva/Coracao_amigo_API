const Resposible = require('../models/Responsavel_familiar')

class ResponsibleRepository {
    async newResposible(objectResposible) {
        try {
            const result = await Resposible.create(objectResposible)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listResponsibleFamily(familyId) {
        try {
            const result = await Resposible.findOne({
                where:{
                    id_familia: familyId
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new ResponsibleRepository()