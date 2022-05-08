const express = require('express')
const router = express.Router()

const FamilyController = require('../controller/FamilyController')
const VoluntaryController = require('../controller/VoluntaryController')

router.post('/newFamily/:voluntaryId', FamilyController.newFamily)
router.get('/listAllFamilies', FamilyController.listAllFamilies)
router.get('/listFamily/:responsibleId', FamilyController.listFamily)

router.post('/newVoluntary', VoluntaryController.newVoluntary)
router.get('/listAllVoluntaries', VoluntaryController.listAllVoluntaries)

module.exports = router