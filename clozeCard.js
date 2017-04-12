'use strict';
var Card = require("./cards");


var questionInput = "George Washington was the first president of the United States?"
var answerInput = "George Washington"

console.log("\n--------cloze card----------");
function ClozeCard(question, answer) {
    this.question = question;
    this.answer = answer;
    var clozeCardArgs = Array.prototype.slice.call(arguments);
    console.log("ClozeCard's this is: " + this);
}

ClozeCard.prototype = new Card();
ClozeCard.prototype.Porpoii = function(question, answer){
    var q = this.question.replace(answer, "...");
    var a = this.answer;
    console.log("Cloze question: " + q);
    console.log("Cloze answer: " + a);
};

var clozeCard = new ClozeCard(questionInput, answerInput);
clozeCard.Porpoii(questionInput, answerInput); 





// var clozeCard = new ClozeCard(questionInput, answerInput);
// console.log(ClozeCard.Porpoii());
// console.log(clozeCard.Porpoii(questionInput, answerInput));

// var ClozeCard = function (question, answer) {
//     this.question = question;
//     this.answer = answer;
//     var clozeCard = new Card(question, answer);
//     function clozeQuestion(question, answer){
//         var q = this.question.replace(this.answer, "...");
//         var a = this.answer;
        
//     } 
// }
