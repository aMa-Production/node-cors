const express = require('express');
const router = express.Router();

// handling incomming Get request to /orders

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: ' Orders were fetched'
    });
});

router.post('/',(req,res,next)=>{
    // creating new order object
    const order = {
        productId:req.body.productId,
        quantity: req.body,quantity
    }
    res.status(200).json({
        message: 'Order was created',
        order:order
    });
});

router.get('/:orderId', (req,res,next)=>{
    res.status(200).json({
        message: 'Order details',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId',(req,res,next)=>{
    res.status(200).json({
        message: 'Order deleted Successfully'
    });
});

module.exports = router;