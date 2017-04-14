'use strict';
var fs = require("fs");
//var questionInput = "George Washington was the first president of the United States?"
//var answerInput = "George Washington"

//create base card to use to prototype
var Card = function(question, answer) { 
    this.question = question;
    this.answer = answer;
};
//export card to be used by others files
module.exports = Card;

//create new card to test constructor & logs to ensure properties log correctly
// var card = new Card (questionInput, answerInput);
// console.log("\n--------card----------");
// console.log("question: ", card.question);
// console.log("answer: ", card.answer);


