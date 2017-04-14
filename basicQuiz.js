//'use strict';
var Card = require("./cards");

var fs = require("fs");

//get questions from basic txt card file
fs.readFile("questionsBasic.txt", "utf8", function(err, data){
    //splice data from file based on returns in txt file and put in array
    output = data.split("\n");
    //log out to see array
    //console.log(output);
    //loop thru and create q/a pairs
    for (var i = 0; i < output.length; i+=2) {
            q = output[i];
            a = output[i+1];
            //console.log ("q = " + q);
            //console.log ("a = " + a);
            nextQuestion = new BasicCard(q, a)
            console.log("next question: " + nextQuestion.question)
    }   
})