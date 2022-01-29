const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({
//   pass origin which you want to allow
  origin : "http://127.0.0.1:4000", // for particular origin allowance
  origin: "*" // for allowance to all origin that comes through this can be done for get request but for the rest of request 
//   PUT,DELETE,etc we have to pass OPTIONS for request method ,
  
  methods: ['GET,POST,PUT,DELETE'],
             credientals: true, // for cookies and all to include 

    })
       );

app.get('/data',(req,res,next)=>{
res.json({
        name: "anish",
        favouriteFood: "Rice"
  })
});


app.listen(3000);

// npm i cors -> for cors for express
