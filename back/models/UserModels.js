const mongoose = require("mongoose");
const { Schema } = mongoose;
var AutoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = new Schema({
    id: {type: Number, unique: true},
    nom: String,
    prenom: String,
    login: {
        type: String,
        //required: false,
        //unique: true,
    },
    email:{
        type: String,
        required: true
    }, 
    mdp: {
        type: String,
        required: true,
    },
    categorie: {
        type: String,
        default: 'Client'
    }
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