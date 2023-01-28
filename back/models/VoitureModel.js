const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./UserModels").schema;
var AutoIncrement = require('mongoose-sequence')(mongoose);

// const Personne = new Schema({
//     id: Number,
//     email: String,
//     nom: String,
//     prenom: String,
//     login: String,
//     mdp: String, 
//     categorie: String
// });
// const Piece = new Schema({0: String,1: String});

const Liste = new Schema({
    idReparation: String,
    type: String,
    piece: [{type: String}]
});

const Facture = new Schema({
    idFacture: String,
    date: String, // any amn traitement avadika date via new Date(jsonDate)
    montantTotal: Number,
    montantPaye: Number,
});
const Reparation = new Schema({
    liste:[{type: Liste}],
    entree: String,
    sortie: String,
    mecanicien: User,
    facture: [{type: Facture}]
});
const VoitSchema = new mongoose.Schema({
    idVoit: Number,
    id: String,
    personne: User,
    nom: String,
    marque: String,
    numero: String,
    statut: Number,
    reparation: [{type: Reparation}],
});
VoitSchema.plugin(AutoIncrement,{inc_field:'idVoit'});

module.exports = mongoose.model("voiture", VoitSchema);
