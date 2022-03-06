const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const user = mongoose.model('user');

module.exports.register = (req, res, next) => {
    var User = new user();
    User.name = req.body.name;
    User.email = req.body.email;
    User.password = req.body.password;
    User.mobile = req.body.mobile;
    User.address = req.body.address;
    User.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.verify = (req, res, next) => {
    user.findOne({_id: req.body._id},
        (err, user) => {
            if(!user)
                return res.status(404).json({ status: false,
                message: 'User not found.'});
            else
            {
                if(!user.verify)
                {
                    return res.status(404).json({ status: false,
                        message: 'User not verified.'});
                }

                else
                {
                    return res.status(200).json({status: true,message: 'User is verified'});
                }
            }
        })
}

module.exports.userProfile = (req, res, next) =>{
    user.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['fullName','email']) });
        }
    );
}