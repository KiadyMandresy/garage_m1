const Voiture = require('../models/VoitureModel');
var express = require('express');
const controller = require('../controllers/VoitControllers')
var router = express.Router();

router.post('/CreateVoit', controller.create);

router.get('/getAllVoiture', controller.getAll);

router.get('/getVoitById/:id',controller.getById);

router.get('/getVoitureByIdClient',controller.getByIdClient);

router.patch('/UpdateVoit/:id',controller.update);

router.patch('/updatePersonne/:id',controller.updatePersonne);

router.patch('/addReparation/:id',controller.pushReparation);

module.exports = router;