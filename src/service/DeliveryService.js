const DeliveryRepository = require('../Repository/DeliveryRepository')

class DeliveryService {
    async newDelivery(object) {
        try {
            const res = await DeliveryRepository.newDelivery(object)
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listDeliveryFamiliy(familyId) {
        try {
            const res = await DeliveryRepository.listDeliveryFamiliy(familyId)
            return res
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listDeliveryVoluntary(voluntaryId) {
        try {
            const res = await DeliveryRepository.listDeliveryVoluntary(voluntaryId)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listDeliveriesRoute(router_id) {
        try {
            const res = await DeliveryRepository.listDeliveriesRoute(router_id)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async updateStatusDelivery(deliveryId, status, data, hora) {
        try {
            const res = await DeliveryRepository.updateStatusDelivery(deliveryId, status, data, hora)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async deleteVoluntaryIdDelivery(voluntaryId,) {
        try {
            const res = await DeliveryRepository.deleteVoluntaryIdDelivery(voluntaryId)
            return res
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new DeliveryService()