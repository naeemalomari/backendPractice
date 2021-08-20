'use strict';

const superagent = require('superagent');
const ArticModel=require('../model/artic.model');
const getArtData = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks`;
    superagent.get(url)
        .then(data => {

            const responseData=data.body.data.map(art =>{

return new ArticModel(art);

            })
res.send(responseData);

        })
        .catch(err => {

            console.log('==============================');
            console.log(err);
            console.log('==============================');
        })
}


module.exports = {
    getArtData,
}