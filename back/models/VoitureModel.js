const mongoose = require("mongoose");
const User = require("./UserModels");

const Piece = new Schema({0:String, 1:String});

const Liste = new Schema({
    idReparation: String,
    type: String,
    piece: Piece
});

const Facture = new Schema({
    idFacture: String,
    date: Date,
    montantTotal: Number,
    montantPaye: Number,
});
const Reparation = new Schema({
    liste:[Liste],
    entree: Date,
    sortie: Date,
    mecanicien: User,
    facture: [Facture]
});
const VoitSchema = new mongoose.Schema({
    id: String,
    personne: User,
    nom: String,
    marque: String,
    numero: String,
    statut: Number,
    reparation: [Reparation],
});


module.exports = mongoose.model("Data", VoitSchema);
