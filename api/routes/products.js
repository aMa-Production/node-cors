const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Handling Get request to /products'
    });
});

router.post('/', (req,res,next)=>{
    const product = {
        name: req.body.name,
        price: req.body.price
    };
    res.status(201).json({
        message: 'Handling Get request to /products',
        createdProduct: product
    });
});

router.get('/:productId', (req,res,next)=>{
    const id = req.params.productId;
    if(id === 'special'){
        res.status(200).json({
            message: 'You discovered special ID',
            id: id
        });

    }else{
        res.status(200).json({
            message: 'You passed an ID'
        });
    }

});

router.patch('/:productId', (req, res,next) => {
    res.status(200).json({
        message: 'Updated Product!'
    });
});

router.delete('/:productId',(req,res,next) => {
    res.status(200).json({
        message: 'Deleted Product Successfully'
    });
});

module.exports = router;