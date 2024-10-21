const mangoose = require('mongoose');

const orderSchema = new mangoose.Schema({
    cartItem: Array,
    amount: String,
    status: String,
    createdAt: Date
});

const orderModel = mangoose.model('Order', orderSchema);
module.exports = orderModel;