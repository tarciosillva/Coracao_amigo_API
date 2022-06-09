const RouterService = require('../service/RouterService')

class RoutesController {
    async listAllRoutes(request, response) {
        try {
            const res = await RouterService.listAllRoutes()
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }

    async listFamiliesRouter(request, response) {
        const routerId = request.params.routerId
        try {
            const res = await RouterService.listFamiliesRouter(routerId)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }
}

module.exports = new RoutesController()