const mongoose = require("mongoose");
const { Schema } = mongoose;
var AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new Schema({
    id: Number,
    nom: String,
    prenom: String,
    login: {
        type: String,
        required: true,
        unique: true,
    },
    email: String,
    mdp: {
        type: String,
        required: true,
    },
    categorie: String,
});

UserSchema.plugin(AutoIncrement,{inc_field: 'id'});
// UserSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id.toString()
//         delete returnedObject._id
//         //delete returnedObject.__v
//         //do not reveal passwordHash
//         delete returnedObject.mdp
//     }
// })

const User = mongoose.model("user", UserSchema);

module.exports = User;