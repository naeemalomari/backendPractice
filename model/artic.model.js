'use strict';


class ArticModel {

    constructor(data) {

        this.title = data.title
        this.thumbnail = data.thumbnail;
        this.artistName= data.artist_title;
        this.description = data.credit_line;
    }
}
module.exports = ArticModel;