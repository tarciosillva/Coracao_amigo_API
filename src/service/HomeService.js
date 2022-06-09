const HomeRepository = require('../Repository/HomeRepository')

class HomeService {
    async newHome(home, familyId) {
        try {
            const res = await HomeRepository.newHome({
                ...home,
                id_familia: familyId
            })
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listHome(familyId) {
        try {
            const res = await HomeRepository.listHomeFamily(familyId)
            return res
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = new HomeService()