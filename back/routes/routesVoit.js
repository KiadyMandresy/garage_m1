const Model = require('../models/VoitureModel');
const router = require('./users');

router.post('/CreateVoit', (req, res) => {
    const data = new Model({
        personne: req.body.personne,
        nom: req.body.nom,
        marque: req.body.marque,
        numero: req.body.numero,
        statut: req.body.statut,
        reparation: req.body.reparation,
    })

    try{
        const dataToSave = data.save();
        res.status(200).json(dataToSave)
    }
    catch(error){
        res.status(400).json({message: error.message})
    }
});
router.get('/getAllVoiture', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});
router.get('/getVoitById/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
});
router.patch('/UpdateVoit/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        // retournéna ve anaty body ve ilay data updaté
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})