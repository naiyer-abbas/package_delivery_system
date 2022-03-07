const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlOrder = require('../controllers/order.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.post('/user/verify', ctrlUser.verify);
router.post('/generateOrder', ctrlOrder.generate_order);
router.post('/myOrders', ctrlOrder.myOrders);
router.post('/calculateCost', ctrlOrder.calculateCost);
router.post('/confirmUser', ctrlUser.confirmUser);

module.exports = router;



