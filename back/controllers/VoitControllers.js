const User = require('../models/UserModels');
const Voiture = require('../models/VoitureModel');
const mongoose = require("mongoose");



exports.updatePersonne = (req, res) => {
    let fields = ['personne.id','personne.email','personne.nom',
    'personne.prenom','personne.login','personne.mdp','personne.categorie'];
    let operators = ['$set','$set','$set','$set','$set','$set','$set'];
    let values = ['updatedData.personne.id','updatedData.personne.email','updatedData.personne.nom',
    'updatedData.personne.prenom','updatedData.personne.login','updatedData.personne.mdp','updatedData.personne.categorie'];
    update[operator][field] = value;
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let operator = operators[i];
        let value = values[i];
        if (!update[operator]) {
          update[operator] = {};
        }
        update[operator][field] = value;
      }
    try{
        Voiture.findOneAndUpdate({id:req.params.id},update,{new: true})
        res.send("personne in voiture updated successfully!")
    }
    catch(err){
        res.send("error while updating personne in voiture")
        console.log(err);
    }
};
exports.pushReparation = (req, res) => {
    let fields = [
                "reparation.$.liste.$.type",
                "reparation.$.liste.$.piece.$",
                "reparation.$.mecanicien.email",
                "reparation.$.mecanicien.nom",
                "reparation.$.mecanicien.prenom",
                "reparation.$.mecanicien.login",
                "reparation.$.mecanicien.mdp",
                "reparation.$.mecanicien.categorie",
                "reparation.$.entree", 
                "reparation.$.sortie", 
                "reparation.$.entree", 
                "reparation.$.facture.$.idFacture",
                "reparation.$.facture.$.date",
                "reparation.$.facture.$.montantTotal",
                "reparation.$.facture.$.montantPaye"
    ];
    let operators = ['$push','$push','$push','$push','$push','$push','$push','$push','$push','$push','$push','$push','$push','$push','$push'];
    let values = [
        "updatedData.reparation.$.liste.$.type", 
        "updatedData.reparation.$.liste.$.piece.$",
        "updatedData.reparation.$.mecanicien.email",
        "updatedData.reparation.$.mecanicien.nom",
        "updatedData.reparation.$.mecanicien.prenom",
        "updatedData.reparation.$.mecanicien.login",
        "updatedData.reparation.$.mecanicien.mdp",
        "updatedData.reparation.$.mecanicien.categorie",
        "updatedData.reparation.$.entree",
        "updatedData.reparation.$.sortie",
        "updatedData.reparation.$.entree",
        "updatedData.reparation.$.facture.$.idFacture",
        "updatedData.reparation.$.facture.$.date",
        "updatedData.reparation.$.facture.$.montantTotal",
        "updatedData.reparation.$.facture.$.montantPaye"
    ];
    update[operator][field] = value;
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        let operator = operators[i];
        let value = values[i];
        if (!update[operator]) {
          update[operator] = {};
        }
        update[operator][field] = value;
      }
    try{
        Voiture.findOneAndUpdate({id:req.params.id},update,{new: true})
        res.send("reparation in voiture updated successfully!")
    }
    catch(err){
        res.send("error while pushing reparation in voiture")
        console.log(err);
    }          

};

exports.create = (req, res) => {
    console.log("ligne 5 Create Voiture");
    //let personne = new User();
    console.log(req.body);
    // if(req.body['personne.nom'])
    // personne.nom = req.body['personne.nom'];
    // if(req.body['personne.email'])
    // personne.email = req.body['personne.email'];
    // if(req.body['personne.mdp'])
    // personne.mdp = req.body['personne.mdp'];
    // if(req.body['personne.id'])
    // personne.id = req.body['personne.id'];
    // if(req.body['personne.prenom'])
    // personne.prenom = req.body['personne.prenom'];
    // if(req.body['personne.login'])
    // personne.login = req.body['personne.login'];
    // if(req.body['personne.categorie'])
    // personne.categorie = req.body['personne.categorie'];
    const data = new Voiture({
        personne: mongoose.Types.ObjectId(req.body.personne),
        nom: req.body.nom,
        marque: req.body.marque,
        numero: req.body.numero,
        statut: req.body.statut,
        reparation: req.body.reparation,
    })
    console.log(data);
    try{
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
};
exports.getAll = async (req, res) => {
    try{
        const data = await Voiture.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};
exports.getByIdClient = async (req, res) => {
    try{
        const data = await Voiture.find({'personne.id': req.params.id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};
exports.getByObjectId = async (req, res) => {
    Voiture.find({ "personne": req.params.id }).populate('personne').exec(function (err, cars) {
        if (err) res.status(500).json({message: err.message});
        res.status(200).json(cars)
    });
};
exports.getById = async (req, res) => {
    try{
        const data = await Voiture.find({id:req.params.idClient});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
};
exports.update = (req, res) => {
    try {
        const updatedData = req.body;
        // const query = {id:req.params.id}
        // const result = await Voiture.findByIdAndUpdate(
        //     id, updatedData, options
        // )
        // if(!updatedData.personne === undefined)
        // {
        //     //updatePersonne
        // }
        // if(!updatedData.reparation === undefined)
        // {
            
        // }
        console.log(req.body.nom);
        Voiture.findOneAndUpdate({id: req.params.id}, 
            {$set: 
                { 
                nom:    updatedData.nom,
                marque: updatedData.marque,
                numero: updatedData.numero,
                statut: updatedData.statut,
                }}, 
            {
                new: true,
            //ignoreUndefined: true
            }, 
            (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!".err);
            }
            res.status(200).json({message: doc});
            console.log(doc);
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

};