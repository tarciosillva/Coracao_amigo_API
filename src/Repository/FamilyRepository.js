const FamilyModel = require('../models/Familia')

class FamilyRepository {
    async newFamily(objectFamily) {
        try {
            await FamilyModel.create(objectFamily).then((result) => {
                return result
            })
        } catch (error) {
            console.error(error)
        }
    }

    async listAllFamilies() {
        try {
            await FamilyModel.findAll().then((result) => {
                return result
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new FamilyRepository()