const FamilyRepository = require('../Repository/FamilyRepository')
const ResponsibleRepository = require('../Repository/ResponsibleRepository')
const HomeRepository = require('../Repository/HomeRepository')
const AdressRepository=require('../Repository/AdressRepository')
const DependetRepository =require('../Repository/DependentRespository')

class FamilyService {
    async newFamily(family, user_id, route_id) {
        try {
            const res = await FamilyRepository.newFamily({...family, id_usuario_criacao:parseInt(user_id), id_rota:parseInt(route_id)})
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listAllFamilies() {
        try {
            const res = await FamilyRepository.listAllFamilies()
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listFamily(familyId) {
        try {
            const res = await FamilyRepository.listFamily(familyId)
            return res
        } catch (error) {
            console.error(error)
        }
    }

    async listAllFamiliesRegisterFull() {
        try {
            const familiesRegisterFull=[]
            const families = await FamilyRepository.listAllFamilies()

            for (const familyRegister of families) {
                const family = await FamilyRepository.listFamily(familyRegister.dataValues.id)
                const responsible = await ResponsibleRepository.listResponsibleFamily(familyRegister.dataValues.id)
                const familyHome = await HomeRepository.listHomeFamily(familyRegister.dataValues.id)
                const adress = await AdressRepository.listAdressFamily(familyRegister.dataValues.id)
                const dependet = await DependetRepository.listDependentsFamily(familyRegister.dataValues.id)

                familiesRegisterFull.push({family, responsible, familyHome, adress, dependet})   
            }           
            return familiesRegisterFull
        } catch (error) {
            console.error(error)
        }
    }

    async updateActualStateFamily(familyId,actualState) {
        try {
            const res = await FamilyRepository.updateActualStateFamily(familyId,actualState)
            return res
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new FamilyService()