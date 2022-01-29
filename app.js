const express  = require('express');
const app = express();
const morgan = require('morgan'); // logger middleware

const bodyParser = require('body-parser');


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
// this extract json data and make easily readable to us in json format
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// using cors headers allowence before route

app.use((req, res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.json('Access-Control-Allow-Headers', 'Origin,X-Requested_with, Content-Type, Accept,Authorization'
    );
    // check if incomming request 
    if(req.method === 'OPTIONS'){
        // browser will always send options requests
        res.header('Access-Control-Allow-Methods','PUT,POST, PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next(); //call always at the end of our middleware, if not returning immediately due to options request
});

// cors check end between code


// routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req,res,next) => {
    const error = new Element('Not Found');
    error.status = 404;
    next(error);
});

app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});

module.exports = app;

// body parse -> to parse the body of incomming requests because it is not nicely formatted and easily readable by default in nodejs so we use those data and body parser doesnot support files but supports url encoded, json data 