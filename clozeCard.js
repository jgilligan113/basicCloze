//'use strict';
var Card = require("./cards");


//var questionInput = "George Washington was the first president of the United States?"
//var answerInput = "George Washington"

console.log("\n--------cloze card----------");
function ClozeCard(question, answer) {
    this.question = question;
    this.answer = answer;
    var clozeCardArgs = Array.prototype.slice.call(arguments);
    //console.log("ClozeCard's this is: " + this);
    this.porpoiiAsk = function(question, answer){
        var q = this.question.replace(answer, "...");
        var a = this.answer;
        console.log("Cloze question: " + q);
        //console.log("Cloze answer: " + a);
    };
    this.porpoiiRespond = function(question, answer){
        var q = this.question.replace(answer, "...");
        var a = this.answer;
        //console.log("Cloze question: " + q);
        console.log("Cloze answer: " + a);
        };
    } 

ClozeCard.prototype = new Card();
module.exports = ClozeCard;
