const VoluntaryService = require('../service/UserService')
const AdressService = require('../service/AdressService')

class VoluntaryController {
    async newUser(request, response) {
        const newUser = request.body.user
        const newAdress = request.body.adress

        try {
            const userRegistred = await VoluntaryService.newUser(newUser)
            const adress = await AdressService.newAdressUser(newAdress, userRegistred.dataValues.id)
            response.send({
                voluntary: userRegistred,
                adress: adress
            })
        } catch (error) {
            response.status(500).json({
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