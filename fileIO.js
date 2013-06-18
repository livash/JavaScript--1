var us = require('underscore');

// nodejs I/O library
var fs = require("fs");


/*
//make new file
var fileName = 'numbers.txt';
var numbers = us.range(1, 101);
var numbersString = numbers.join("\n");
var data = numbersString;
//console.log(numbersString);
fs.writeFile(fileName, data, function(err) {
  if(err) throw err;
  console.log("It's saved!")
});

*/
//open existing file,
//read in the numbers, reverse them and save in another file

var fileName = '/Users/appacademy/Desktop/w6d1/numbers.txt';
var newFileName = 'reversedNumbers.txt';

var text;

fs.readFile(fileName, 'utf8', function(err, data) {
  if(err) throw err;
  text = data;
  //console.log(text);
  var reversedText = (text.split('\n').reverse()).join('\n');
  console.log(reversedText);
  fs.writeFile(newFileName, reversedText, function(err) {
    if(err) throw err;
    console.log("It's saved!");
  })
});

//var reversedText = text.split('\n');
