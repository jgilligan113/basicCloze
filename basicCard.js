'use strict';
var Card = require("./cards");
var fs = require("fs");


var questionInput = "George Washington was the first president of the United States?"
var answerInput = "George Washington"

console.log("\n-------Variables----------");
console.log("variables: "+ questionInput, answerInput);

console.log("\n-------Card from require----------");
console.log(Card);

function BasicCard(question, answer) {
    this.question = question;
    this.answer = answer;
    //var basicCardArgs = Array.prototype.slice.call(arguments);
    console.log(this);
   
}

BasicCard.prototype = new Card();



var basicCard = new BasicCard(questionInput, answerInput);

console.log("\n--------basic card----------");
console.log("This is the basicCard: " + basicCard);
console.log("Basic Card Question: " + basicCard.question);
console.log("Basic Card Answer: " + basicCard.answer);
