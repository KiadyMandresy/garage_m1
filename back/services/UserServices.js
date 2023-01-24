const User = require('../models/UserModels')
const bcrypt = require('bcryptjs');
const auth = require('../helpers/jwt.js')


async function login({ email, mdp }) {
    //console.log({ email, mdp });
    const user = await User.findOne({email: email});
    console.log(bcrypt.compareSync(mdp, user.mdp));
    // synchronously compare user entered password with hashed password
    if (bcrypt.compareSync(mdp, user.mdp)) {
        // console.log("ato");
        const token = auth.generateAccessToken(user.login);
        // call toJSON method applied during model instantiation
        return { ...user.toJSON(), token }
    }
}

async function register(params) {

    // instantiate a user modal and save to mongoDB
    const user = new User(params)
    await user.save();
}

async function getById(id) {

    const user = await User.findById(id);
    // call toJSON method applied during model instantiation
    return user.toJSON()
}

module.exports = {
    login,
    register,
    getById
};
