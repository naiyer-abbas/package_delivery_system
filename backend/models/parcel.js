const mongoose = require('mongoose');

let parcel = mongoose.model('parcel', {
    width: {type: Number},
    height: {type: Number},
})

module.exports = {
    parcel
}