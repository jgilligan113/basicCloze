//'use strict';
var Card = require("./cards");
var fs = require("fs");



function BasicCard(question, answer) {
    this.question = question;
    this.answer = answer;
    //console.log(this.question);   
}

BasicCard.prototype = new Card();


module.exports = BasicCard;


// var basicCard = new BasicCard(questionInput, answerInput);

// console.log("\n--------basic card----------");
// console.log("This is the basicCard: " + basicCard);
// console.log("Basic Card Question: " + basicCard.question);
// console.log("Basic Card Answer: " + basicCard.answer);
