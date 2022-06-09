const Home = require('../models/Moradia_familia')

class HomeRepository {
    async newHome(objectHome) {
        try {
            const result = await Home.create(objectHome)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listHomeFamily(familyId) {
        try {
            const result  = await Home.findOne({
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

module.exports = new HomeRepository()