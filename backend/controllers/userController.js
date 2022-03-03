const express = require('express');
const router = express.Router();

var {user} = require('../models/user');


// => localhost:3000/users/
router.get('/', (req, res) => {
    user.find((err, docs) => {
        if(!err)
        {
            res.send(docs);
        }
        else
        {
            console.log('Error in retrieving user information!')
        }
    });
});

router.post('/', (req, res) => {
    var usr = new user({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        mobile: req.body.mobile,
    });
    usr.save((err, doc) => {
      if(!err){res.send(doc);} 
      else {console.log('Error in registering the user')} 
    });
})

module.exports = router;