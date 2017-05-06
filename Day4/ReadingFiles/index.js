// var fs = require('fs');
//
// function print (error, content) {
// console.log(content);
// }
//
// fs.readFile('file.txt', 'utf8', print);
// console.log(2*2);

var fs = require('fs');

function print (error, content) {
  if (error) {
    console.log('Oh no! Error!', error);
  } else {
    var numbers = content.split(":");
    var result = 0;
    for(var i = 0; i < numbers.length; i++) {
        result += parseInt(numbers[i]);
    }
    var avg = result / numbers.length;
    fs.writeFile('file2.txt', avg,  otraFuncion);
  }
}

function otraFuncion(errors, content) {
  console.log('Success!');
}

fs.readFile('file.txt', 'utf8', print);
//
// var numbers = [80, 100, 70, 90];
// var result = 0;
// for(var i = 0; i < numbers.length; i++) {
//     result += numbers[i];
// }
// var avg = result / numbers.length;
// console.log(avg);
