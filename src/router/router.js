const express = require('express')
const router = express.Router()

const Auth = require('../Auth/Autenticate')

const FamilyController = require('../controller/FamilyController')
const UserController = require('../controller/UserController')
const AdressController = require('../controller/AdressController')
const DeliveryController = require('../controller/DeliveryController')
const RoutesController = require('../controller/RoutesController')

router.post('/newFamily/:voluntaryId', Auth.autenticate, FamilyController.newFamily)
router.get('/listAllFamilies', Auth.autenticate, FamilyController.listAllFamilies)
router.get('/listFamilyRegisterFull/:familyId', Auth.autenticate, FamilyController.listFamily)
router.get('/listAllFamiliesRegisterFull', Auth.autenticate, FamilyController.listAllFamiliesRegisterFull)
router.put('/updateActualStateFamily/:familyId/:actualState', /* Auth.autenticate, */ FamilyController.updateActualStateFamily)

router.get('/listAllVoluntaries', Auth.autenticate, UserController.listAllVoluntaries)

router.post('/newUser', Auth.autenticate, UserController.newUser)

router.get('/listCordinatesGeolocalizationFamilyAdress', Auth.autenticate, AdressController.listCordinatesGeolocalizationFamilyAdress)

router.post('/newDelivery', Auth.autenticate, DeliveryController.newDelivery)
router.get('/listDeliveryFamiliy/:familyId', Auth.autenticate, DeliveryController.listDeliveryFamiliy)
router.get('/listDeliveriesRoute/:routerId', Auth.autenticate, DeliveryController.listDeliveriesRoute)
router.get('/listDeliveryVoluntary/:voluntaryId', Auth.autenticate, DeliveryController.listDeliveryVoluntary)
router.put('/updateStatusDelivery/:deliveryId', Auth.autenticate, DeliveryController.updateStatusDelivery)
router.delete('/deleteVoluntaryIdDelivery/:voluntaryId', Auth.autenticate, DeliveryController.deleteVoluntaryIdDelivery)


router.get('/listAllRoutes', Auth.autenticate, RoutesController.listAllRoutes)
router.get('/listFamiliesRouter/:routerId', Auth.autenticate, RoutesController.listFamiliesRouter)

module.exports = router