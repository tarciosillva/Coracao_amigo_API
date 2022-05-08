const FamilyService = require('../service/FamilyService')

class FamilyController {
    async newFamily(request, response) {
        const {voluntaryId} = request.params
        const family = request.body
        try {
            const res = await FamilyService.newFamily(family,voluntaryId)
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