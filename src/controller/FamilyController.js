const FamilyService = require('../service/FamilyService')

class FamilyController {
    async newFamily(request, response) {
        const family = request.body
        console.log(request.body)
        try {
            const res = await FamilyService.newFamily(family)
            response.send(res)
        } catch (error) {
            response.send(error).stausCode(500)
        }
    }

    async listAllFamilies(request, response) {
        try {
            const res = await FamilyService.listAllFamilies()
            response.send(res)
        } catch (error) {
            response.send(error).sendStatus(500)
        }
    }

    async listFamily(request, response) {
        try {

        } catch (error) {

        }
    }
}

module.exports = new FamilyController()