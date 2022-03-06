const mongoose = require('mongoose');
const order = mongoose.model('order');

module.exports.generate_order = (req, res, next) => {
    var Order = new order();
    Order.pickupAddress = req.body.pickupAddress;
    Order.deliveryAddress = req.body.deliveryAddress;
    Order.deliverTo = req.body.deliverTo;
    Order.weight = req.body.weight;
    Order.width = req.body.width;
    Order.height = req.body.height;
    Order.email = req.body.email;
    Order.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {

            return next(err);
        }

    });
}

module.exports.myOrders = (req, res, next) =>{
    order.find({ email: req.body.email},
        (err, order) => {
            if (!order)
                return res.status(404).json({ status: false, message: 'No orders found!.' });
            else
                return res.status(200).json({ status: true, order});
        }
    );
}

module.exports.calculateCost = (req, res, next) =>{
    let weight = parseInt(req.body.weight);
    let height = parseInt(req.body.height);
    let width = parseInt(req.body.width);
    const cost = 10 * weight * height * width;
    return res.status(200).json({cost});
}

