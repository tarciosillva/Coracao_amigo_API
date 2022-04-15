const FamilyRepository = require('../Repository/FamilyRepository')

class FamilyService {
    async newFamily(family) {
        try {
            const res = await FamilyRepository.newFamily(family)
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