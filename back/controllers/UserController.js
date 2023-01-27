const express = require('express')
const router = express.Router();
const bcrypt = require('bcrypt')
const userServices = require('../services/UserServices.js')

router.post('/register', (req, res, next) => {
    console.log(req.body);
    const { mdp } = req.body
    const salt = bcrypt.genSaltSync(10);
    req.body.mdp = bcrypt.hashSync(mdp, salt);
    userServices.register(req.body).then(
        () => res.sendStatus(200)
    ).catch(
        err => next(err)
    )
})

router.post('/login', (req, res, next) => {
    //console.log(req.body);
    const { email, mdp } = req.body;
    //console.log( { email, mdp });
    userServices.login({email, mdp })
        .then(user => {
            res.json(user)
        }
        ).catch(err => next(err))
})

router.get('/:id', (req, res, next) => {
    userServices.getById(req.params.id).then(
        (user) => res.json(user)
    ).catch(err => next(err))
})

module.exports = router;