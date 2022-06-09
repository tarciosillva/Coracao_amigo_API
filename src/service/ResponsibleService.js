const ResponsibleRepository = require('../Repository/ResponsibleRepository')

class ResponsibleService {
    async newResposible(responsible, familyId) {
        try {
            const res = await ResponsibleRepository.newResposible({
                ...responsible,
                id_familia: familyId
            })
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listResposible(familyId) {
        try {
            const res = await ResponsibleRepository.listResponsibleFamily(familyId)
            return res
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = new ResponsibleService()