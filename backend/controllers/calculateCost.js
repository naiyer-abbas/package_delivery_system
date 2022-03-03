const express = require('express');
const router = express.Router();

var {parcel} = require('../models/parcel');

// => localhost:3000/users/
router.get('/', (req, res) => {
    parcel.find((err, docs) => {
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
