const mongoose = require('mongoose');

let user = mongoose.model('user', {
    name: {type: String},
    email: {type: String},
    password: {type: String},
    address: {type: String},
    mobile: {type: String}
})

module.exports = {
    user
}