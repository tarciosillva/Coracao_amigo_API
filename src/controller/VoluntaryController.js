const VoluntaryService = require('../service/VoluntaryService')
class VoluntaryController {
    async newVoluntary(request, response) {
        const voluntary = request.body
        try {
            const res = await VoluntaryService.newVoluntary(voluntary)
            response.send(res)
        } catch (error) {
            response.staus(500).json({
                error: error
            })
        }
    }

    async listAllVoluntaries(request, response) {
        try {
            const res = await VoluntaryService.listAllVoluntaries()
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }
}

module.exports = new VoluntaryController()