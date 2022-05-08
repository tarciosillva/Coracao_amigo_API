const VoluntaryService = require('../service/VoluntaryService')
const AdressService = require('../service/AdressService')
class VoluntaryController {
    async newVoluntary(request, response) {
        const newVoluntary = request.body.voluntary
        const newAdress = request.body.adress
        try {
            const voluntaryRegisted = await VoluntaryService.newVoluntary(newVoluntary)
            const adress = await AdressService.newAdressUser(newAdress, voluntaryRegisted.dataValues.id)
            response.send({
                voluntary:voluntaryRegisted,
                adress:adress
            })
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