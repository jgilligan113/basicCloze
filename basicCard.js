//'use strict';
var Card = require("./cards");
var fs = require("fs");



function BasicCard(question, answer) {
    this.question = question;
    this.answer = answer; 
}

BasicCard.prototype = new Card();


module.exports = BasicCard;
