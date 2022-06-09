const Dependent = require('../models/Dependente')

class DependentRepository {
    async newDependent(objectDependent) {
        try {
            const result = await Dependent.create(objectDependent)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listDependentsFamily(familyId) {
        console.log(familyId)
        try {
            const result = await Dependent.findAll({
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

module.exports = new DependentRepository()