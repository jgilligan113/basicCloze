'use strict'
var inquirer = require("inquirer");
var fs = require("fs");
var BasicCard = require("./basicCard");
var question;
var answer;
var cardsBasic = [];
var gameStart = [
    {
        type: "input",
        name: "player",
        message: "Please enter your name if you are ready to play"
    },
    {
        type: "list",
        name: "type",
        message: "Which version would you like to play?",
        choices: ["basic", "cloze"]
    }
];
//ask which quiz to take
inquirer.prompt (gameStart).then(function(res){
    
    if (res.type == "basic") {
        console.log("let's get started");
        getBasicCards();
        //flashBasic();
        //prompt
    }
    else if (res.type == "cloze") {
        console.log("let's cloze!");
    }
    else {return}

});

var getBasicCards = function (){
//read the file
fs.readFile("questionsBasic.txt", "utf8", function(err, data){
    //splice data from file based on returns in txt file and put in array
    var output = data.split("\n");
    //console.log(output)
    //loop thru and create q/a pairs
    for (var i = 0; i < output.length; i+=2) {
        question = output[i],
        answer = output[i+1];
        var quizCard = new BasicCard(question, answer);
        //create array of objects to use for prompts and answers
        console.log(quizCard.question);
        console.log(quizCard.answer);
    } 

})
}