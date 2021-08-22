'use strict';

const axios = require('axios');
const ArticModel = require('../model/artic.model');
const getArtData = async (req, res) => {
    const url = `https://api.artic.edu/api/v1/artworks`;
    axios.get(url)
        .then(data => {

            const responseData = data.data.data.map(art => {
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



// {
//     "title":"hussain",
//     "thumbnail":"thubmnail",
//     "artist_name":"naeem",
//     "description":"changing results"
// }