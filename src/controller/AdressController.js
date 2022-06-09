const AdressService = require('../service/AdressService')

class AdressController {
    async listCordinatesGeolocalizationFamilyAdress(request, response) {
        try {
            const res = await AdressService.listCordinatesGeolocalizationFamilyAdress()
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }
}

module.exports = new AdressController()