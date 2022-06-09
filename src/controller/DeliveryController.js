const DeliveryService = require('../service/DeliveryService')

class DeliveryController {
    async newDelivery(request, response) {
        const delivery = request.body
        try {
            const res = await DeliveryService.newDelivery(delivery)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }

    async listDeliveryFamiliy(request, response) {
        const familyId = request.params.familyId
        try {
            const res = await DeliveryService.listDeliveryFamiliy(familyId)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }

    async listDeliveriesRoute(request, response) {
        const routerId = request.params.routerId
        try {
            const res = await DeliveryService.listDeliveriesRoute(routerId)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }

    async listDeliveryVoluntary(request, response) {
        const voluntaryId = request.params.voluntaryId
        try {
            const res = await DeliveryService.listDeliveryVoluntary(voluntaryId)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }

    async updateStatusDelivery(request, response) {
        const {deliveryId} = request.params
        const {status, data, hora} = request.body
        try {
            const res = await DeliveryService.updateStatusDelivery(deliveryId, status, data, hora)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }

    async deleteVoluntaryIdDelivery(request, response) {
        const {voluntaryId} = request.params
        try {
            const res = await DeliveryService.deleteVoluntaryIdDelivery(voluntaryId)
            response.send(res)
        } catch (error) {
            response.staus(500).json('Erro: ' + error)
        }
    }
}

module.exports = new DeliveryController()