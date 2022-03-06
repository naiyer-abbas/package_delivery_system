const mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
    pickupAddress : {type: String},
    deliveryAddress: {type: String},
    deliverTo: {type: String},
    weight: {type: String},
    width: {type: String},
    height: {type: String},
    email: {type: String},
    cost: {type: String}
})

mongoose.model('order', orderSchema);