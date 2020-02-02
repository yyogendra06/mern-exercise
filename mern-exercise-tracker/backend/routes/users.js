// GETS THE ROUTER 
const router = require('express').Router();

// MOMNGOSSE MODELS
let User = require('../models/user.model');

// ALL REQUEST /USERS/
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// ALL REQUEST /USERS/ADD/
router.route('/add').post((req, res) => {

    const username = req.body.username;
    const newUser = new User({ username });

    newUser.save()
        .then(() => res.json('User Added'))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/:id').get((req, res) => {

});

module.exports = router;