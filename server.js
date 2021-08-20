'use strict';


const express = require('express');
const cors = require('cors');
require ('dotenv').config;
require('mongoose');
const app = express();
const PORT =process.env.PORT || 8080
app.use (cors());
app.use (express.json());




const articController= require('./controller/artic.controller');

//http://localhost:8080/art

app.get('/art', articController.getArtData)




//http://localhost:8080/
app.get('/', (req, res) => {
    res.send('server is working FINE!!')
})

app.listen(PORT,() =>{
    console.log(`server is listening to ${PORT}`)
});
