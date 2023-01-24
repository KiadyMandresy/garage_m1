const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
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