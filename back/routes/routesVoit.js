const Voiture = require('../models/VoitureModel');
var express = require('express');
const controller = require('../controllers/VoitControllers')
var router = express.Router();

router.post('/CreateVoit', controller.create);

router.get('/getAllVoiture', controller.getAll);

router.get('/getVoitById/:id',controller.getById);

router.get('/getVoitureByIdClient/:id',controller.getByIdClient);

router.get('/getByObjectId/:id',controller.getByObjectId);

router.get('/getAvalaible/:id',controller.getAvalaible);

router.get('/getInGarage/:id',controller.getInGarage);

router.patch('/updateStatus/:id',controller.updateStatus);

router.patch('/UpdateVoit/:id',controller.update);

router.patch('/updatePersonne/:id',controller.updatePersonne);

router.patch('/addReparation/:id',controller.pushReparation);

router.get('/getVoit/:id',controller.getVoit);

module.exports = router;