'use strict';
var fs = require("fs");
var questionInput = "George Washington was the first president of the United States?"
var answerInput = "George Washington"


var Card = function(question, answer) { 
    this.question = question;
    this.answer = answer;
};

module.exports = Card;

var card = new Card (questionInput, answerInput);
console.log("\n--------card----------");
console.log("question: ", card.question);
console.log("answer: ", card.answer);


