const FamilyService = require('../service/FamilyService')
const HomeService = require('../service/HomeService')
const ResponsibleService = require('../service/ResponsibleService')
const DependentService =  require('../service/DependentService')
const RouterService = require('../service/RouterService')
const AdressService =  require('../service/AdressService')

class FamilyController {
    async newFamily(request, response) {
        const {voluntaryId} = request.params
        const {family, home, responsible, dependents, router, adress} = request.body
       
        try {
            var dependentFamily=[]
            const route = await RouterService.newRouter(router)
            const familyRegister = await FamilyService.newFamily(family,voluntaryId, route.dataValues.id)
            const familyResponsible = await ResponsibleService.newResposible(responsible, familyRegister.dataValues.id)          
            const familyAdress =  await AdressService.newAdressFamily(adress, familyRegister.dataValues.id)
            const familyHome = await HomeService.newHome(home, familyRegister.dataValues.id)
            
            for (const dependent of dependents) {
                const dependentResult = await DependentService.newDependent(dependent, familyRegister.dataValues.id)
                dependentFamily.push(dependentResult)
            }  
            response.send({family:familyRegister,familyResponsible,dependentFamily,familyAdress,familyHome,route})
        } catch (error) {
            response.send(error)
        }
    }

    async listAllFamilies(request, response) {
        try {
            const res = await FamilyService.listAllFamilies()
            response.send(res)
        } catch (error) {
            response.send(error)
        }
    }

    async listFamily(request, response) {
        const {familyId} = request.params
        try {
            const family = await FamilyService.listFamily(familyId)
            const responsible = await ResponsibleService.listResposible(family.dataValues.id)
            const familyHome = await HomeService.listHome(family.dataValues.id)
            const adress = await AdressService.listAdressFamily(family.dataValues.id)
            const dependet = await DependentService.listDependentsFamily(family.dataValues.id)
                  
            response.send({family,responsible, familyHome, adress, dependet})
        } catch (error) {
            response.send(error)
        }
    }

    async listAllFamiliesRegisterFull(request, response) {
        try {
            const res = await FamilyService.listAllFamiliesRegisterFull()                  
            response.send(res)
        } catch (error) {
            response.send(error)
        }
    }

    async updateActualStateFamily(request, response) {
        const {familyId,actualState} = request.params

        console.log(actualState)
        try {
            const res = await FamilyService.updateActualStateFamily(familyId,actualState)
            response.send(res)
        } catch (error) {
            response.send(error)
        }
    }
}

module.exports = new FamilyController()