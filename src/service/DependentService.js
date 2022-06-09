const DependentRespository = require('../Repository/DependentRespository')

class DependentService {
    async newDependent(objectDependent, familyId) {
        try {
            const result = await DependentRespository.newDependent({
                ...objectDependent,
                id_familia: familyId
            })
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listDependentsFamily(familyId) {
        try {
            const res = await DependentRespository.listDependentsFamily(familyId)
            return res
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new DependentService()