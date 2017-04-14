'use strict';
var Card = require("./cards");
var ClozeCard = require("./clozeCard");
var fs = require("fs");
var inquirer = require("inquirer");

//use fs to read and parse out the file
fs.readFile("questionsCloze.txt", "utf8", function(err, data){
    var output = data.split("\n");
    console.log(output);


//determine what output is needed 
    //for (var i = 0; i < output.length; i+=2) {
        var clozeCard = new ClozeCard(output[0], output[1])
        //console.log (clozeCard);
        clozeCard.porpoiiAsk(output[0], output[1]); 
        clozeCard.porpoiiRespond(output[0], output[1]); 
    }
 )