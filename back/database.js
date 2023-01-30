const mongoose = require('mongoose');

const username = "garage";
const password = "qUvpon-5gosva-wydfum";
const cluster = "cluster0.dlcoyol";
const dbname = "data";

//connect to database
mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connexion réussie");
    }).catch((error) => {
        console.log("Connection error ", error);
        process.exit();
    });

var conn = mongoose.connection;

conn.on('connected',function(){
    console.log('database is connected successfully')
});
conn.on('disconnected', function () {

    console.log('database is disconnected successfully');

})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;