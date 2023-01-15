const mongoose = require("../database");

// create an schema

var userSchema = new mongoose.Schema({

    id: String,
    nom: String,
    prenom: String,
    login: string,
    email: String,
    mdp: String,
    categorie: String,
});


const userModel = mongoose.model('User', userSchema);


module.exports = userModel;