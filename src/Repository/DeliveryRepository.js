const Delivery = require('../models/Entregas')
const {
    sequelize
} = require('../models/Entregas')

class DeliveryRepository {
    async newDelivery(object) {
        try {
            const result = await Delivery.create(object)
            return result
        } catch (error) {
            console.error(error)
            return error
        }
    }

    async listDeliveryFamiliy(familyId) {
        try {
            const result = await Delivery.findAll({
                where: {
                    id_familia: familyId,
                    status: 'Entregue'
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async listDeliveryVoluntary(voluntaryId) {
        try {
            const result = await Delivery.findAll({
                where: {
                    id_voluntario: voluntaryId,
                    status: 'Em adamento'
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async listDeliveriesRoute(router_id) {
        try {
            const result = await Delivery.findAll({
                where: {
                    id_rota: router_id
                },
                attributes: {
                    include: [
                        [
                            sequelize.literal(`(
                                SELECT nome
                                FROM usuarios AS usuario
                                WHERE
                                    usuario.id = entregas.id_voluntario
                            )`), 'nome_voluntario',
                        ],
                        [
                            sequelize.literal(`(
                                SELECT nome
                                FROM responsaveis_familiares AS responsavel_familiar
                                WHERE
                                    responsavel_familiar.id_familia = entregas.id_familia
                            )`), 'responsavel_familiar',
                        ],
                    ]
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async updateStatusDelivery(deliveryId, status, data, hora) {
        try {
            const result = await Delivery.update({
                status: status,
                data: data,
                hora: hora
            }, {
                where: {
                    id: deliveryId
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async deleteVoluntaryIdDelivery(voluntaryId) {
        try {
            await Delivery.destroy({
                where: {
                    id_voluntario: voluntaryId
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new DeliveryRepository()