'use strict';
const artPiece = require('../model/artic.mongoose.model');



const createFavoriteArtPiece = async (req, res) => {
    const {
        title,
        thumbnail,
        artist_name,
        description
    } = req.body;
    const slug = title.toLowerCase().split(' ').join('-');
    artPiece.find({ title: title }, (error, data) => {
        if (data.length > 0) {
            res.send('data already exits')
        } else {
            const newArtPiece = new artPiece({
                title: title,
                slug: slug,
                thumbnail: thumbnail,
                artist_name: artist_name,
                description: description
            });
            newArtPiece.save();
            res.send(newArtPiece);
        }
    })
};
const getFavoriteArtPiece = async (req, res) => {
    artPiece.find({}, (error, data) => {
        res.send(data);
    });
};
const deleteFavoriteArtPiece = async (req, res) => {
    const slug = req.params.slug
    artPiece.deleteOne({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    });
}
const updateFavoriteArtPiece = async (req, res) => {
    const { description } = req.body;
    const slug = req.params.slug;
    artPiece.find({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            data[0].description = description;
            data[0].save();
            res.send(data);
        }
    });
};
module.exports = {
    createFavoriteArtPiece,
    getFavoriteArtPiece,
    deleteFavoriteArtPiece,
    updateFavoriteArtPiece,
}