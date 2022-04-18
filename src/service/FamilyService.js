const FamilyRepository = require('../Repository/FamilyRepository')

class FamilyService {
    async newFamily(family, user_id) {
        try {
            const res = await FamilyRepository.newFamily({...family, id_usuario_criacao:parseInt(user_id)})
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listAllFamilies() {
        try {
            const res = await FamilyRepository.listAllFamilies()
            return res
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new FamilyService()