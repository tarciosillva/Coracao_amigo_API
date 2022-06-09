const RouterRepository = require('../Repository/RouterReposiory')
const FamilyRepository = require('../Repository/FamilyRepository')

class RouterService {
    async newRouter(router, familyId, voluntaryId) {
        try {
            const res = await RouterRepository.newRouter({
                ...router,
                id_voluntario: voluntaryId,
                id_familia: familyId
            })
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listRouter(familyId) {
        try {
            const res = await RouterRepository.listRouter(familyId)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listAllRoutes() {
        try {
            var routes = []
            const res = await RouterRepository.listAllRoutes()
            for (const route of res) {
                var family = await FamilyRepository.listFamiliesRouter(route.dataValues.id)
                routes.push({
                    ...route.dataValues,
                    totalFamilies: family.length
                })
            }
            return routes
        } catch (error) {
            console.error(error)
        }
    }

    async listFamiliesRouter(router_id) {
        try {
            const res = await FamilyRepository.listFamiliesRouter(router_id)
            return res
        } catch (error) {
            console.error(error)
        }
    }

}

module.exports = new RouterService()