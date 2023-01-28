const User = require('../models/VoitureModel')

async function updateChildListe(query,newListe){
    Voiture.findOne(query).then(doc => {
        item = doc.items.id(itemId );
        item["type"] = newListe.type;
        item["$"]["piece"] = newListe.$.piece;
        doc.save();
});
async function Update(updatedData,id){
    try {
        const updatedData = req.body;
        const query = {id:req.params.id}
        findOneAndUpdate({id: id}, 
            {$set: 
                { 
                "personne.email": "updatedData.personne.email", 
                "personne.nom": "updatedData.personne.nom",
                "personne.prenom": "updatedData.personne.prenom",
                "personne.login": "updatedData.personne.login",
                "personne.mdp": "updatedData.personne.mdp",
                "personne.categorie": "updatedData.personne.categorie",
                "nom": "updatedData.nom",
                "marque": "updatedData.marque",
                "numero": "updatedData.numero",
                "statut": "updatedData.statut",
                "reparation.$.entree":"updatedData.reparation.$.entree", 
                "reparation.$.sortie":"updatedData.reparation.$.sortie", 
                "reparation.$.entree":"updatedData.reparation.$.entree", 
                
                }}, 
            {new: true}, 
            (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            console.log(doc);
        });
        // Voiture.findOne(query).then(doc => 
        //     voiture.
        // );
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
}
