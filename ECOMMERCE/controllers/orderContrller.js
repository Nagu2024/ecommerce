const orderModel = require('../models/orderModel');

exports.createOrder = async (req, res, next) => {
    const cartItem = req.body;
    const amount = Number(cartItem.reduce((accum, item) => accum + item.product.price * item.qty, 0)).toFixed(2);
    const status = 'Pending';

    const order = await orderModel.create({ cartItem, amount, status });




    res.json({
        success: true,
        order
    })
}