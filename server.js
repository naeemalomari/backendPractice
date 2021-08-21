'use strict';


const express = require('express');
const cors = require('cors');
require('dotenv').config;
require('mongoose');
const app = express();
const PORT = process.env.PORT || 8080
app.use(cors());
app.use(express.json());
const articController = require('./controller/artic.controller')
const crud = require('./controller/artic.crud.controller');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/art',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });

//http://localhost:8080/art

app.get('/art', articController.getArtData)

//http://localhost:8080/
app.get('/', (req, res) => {
    res.send('server is working FINE!!')
})
//////////////////////////////////////////









//http://localhost:8080/art/favorite
app.post('/art/favorite', crud.createFavoriteArtPiece);

//http://localhost:8080/art/favorite
app.get('art/favorite', crud.getFavoriteArtPiece);


//http://localhost:8080/art/favorite/:slug

app.delete('/art/favorite/:slug', crud.deleteFavoriteArtPiece);

app.put('art/favorite/:slug' , crud.updateFavoriteArtPiece);















////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



app.listen(PORT, () => {
    console.log(`server is listening to ${PORT}`)
});
