'use strict'
var inquirer = require("inquirer");
var fs = require("fs");
var BasicCard = require("./basicCard");
var output = [];
var question;
var answer;
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
        basicQuiz();
    }
    else if (res.type == "cloze") {
        console.log("let's cloze!");
    }
    else {return}

});

var basicQuiz = function (){
    
    //read the file
fs.readFile("questionsBasic.txt", "utf8", function(err, data){
    //splice data from file based on returns in txt file and put in array
    output = data.split("\n");
    console.log(output)
   
    //loop thru and create q/a pairs
    for (var i = 0; i < output.length; i+=1) {
        question = output[i],
        answer = output[i+1];
        var quizCard = new BasicCard(question, answer)
        inquirer.prompt({name:"answer", type:"input", message: question}).then(function(input){
            if (input.answer == answer) {console.log("correct")} else {console.log("incorrect")}
        })
        //console.log(quizCard)
    //show question
    
              
            
            
            // inquirer.prompt(qBCard).then(function(response) {
            //     //console.log (response.answer);
            //     //console.log (nextQuestion.answer);
            //     if (response.answer == nextQuestion.answer) {
            //         console.log("Correct! "+ nextQuestion.answer);
            //     } else {
            //         console.log("Nope! The correct answer is " + nextQuestion.answer)
            //     }
            //     count++;
            //     console.log (count)
            //     basicQuiz();
            // })
        } 
})
}