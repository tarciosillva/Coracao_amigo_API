const FamilyModel = require('../models/Familia')
const Op = require('sequelize')
const {
    sequelize
} = require('../models/Familia')

class FamilyRepository {
    async newFamily(objectFamily) {
        try {
            const result = await FamilyModel.create({
                id_usuario_criacao: objectFamily.id_usuario_criacao,
                id_rota: objectFamily.id_rota,
                membros: objectFamily.membros,
                renda_familiar: objectFamily.renda_familiar,
                programas_governo: objectFamily.programas_governo,
                estado_atual: 'Ativo'
            })
            return result
        } catch (error) {
            console.error(error)
        }
    }

    async listAllFamilies() {
        try {
            const result = await FamilyModel.findAll({
                attributes: {
                    include: [
                        [
                            sequelize.literal(`(
                                SELECT nome
                                FROM responsaveis_familiares AS responsavel_familiar
                                WHERE
                                    responsavel_familiar.id_familia = familias.id
                            )`), 'responsavel',
                        ],
                        [
                            sequelize.literal(`(
                                SELECT telefone
                                FROM responsaveis_familiares AS responsavel_familiar
                                WHERE
                                    responsavel_familiar.id_familia = familias.id
                            )`), 'telefone',
                        ],
                        [
                            sequelize.literal(`(
                                SELECT foto
                                FROM moradia_familias AS moradia_familia
                                WHERE
                                    moradia_familia.id_familia = familias.id
                            )`), 'imagem_residencia',
                        ]
                    ]
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async listFamily(familyId) {
        try {
            const result = await FamilyModel.findOne({
                where: {
                    id: familyId
                },
                attributes: ['id', 'id_usuario_criacao', 'membros', 'renda_familiar', 'programas_governo', 'estado_atual', 'created_at']
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async listFamiliesRouter(router_id) {
        try {
            const result = await FamilyModel.findAll({

                where: {
                    id_rota: router_id,
                    estado_atual: 'Ativo'
                },
                attributes: {
                    include: [
                        [
                            sequelize.literal(`(
                                SELECT nome
                                FROM responsaveis_familiares AS responsavel_familiar
                                WHERE
                                    responsavel_familiar.id_familia = familias.id
                            )`), 'responsavel',
                        ],
                        [
                            sequelize.literal(`(
                                SELECT rua
                                FROM enderecos AS endereco
                                WHERE
                                    endereco.id_familia = familias.id
                            )`), 'rua',
                        ],
                        [
                            sequelize.literal(`(
                                SELECT numero
                                FROM enderecos AS endereco
                                WHERE
                                    endereco.id_familia = familias.id
                            )`), 'numero',
                        ],
                        [
                            sequelize.literal(`(
                                SELECT bairro
                                FROM enderecos AS endereco
                                WHERE
                                    endereco.id_familia = familias.id
                            )`), 'bairro',
                        ]
                    ]
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }

    async updateActualStateFamily(familyId, actualState) {
        try {
            const result = await FamilyModel.update({
                estado_atual: actualState
            }, {
                where: {
                    id: familyId
                }
            })
            return result
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = new FamilyRepository()