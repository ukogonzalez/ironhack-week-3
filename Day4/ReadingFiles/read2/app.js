var fs = require ('fs');

function print (error, content){
  if error {
    console.log('Error!');
  } else {
    var numbers = content.split(",");
    var result = 0;
    for(var i = 0; i < numers.length, i++){
      result += parseInt(numbers[i]);
    }
    console.log('Success!');
  }
}







fs.readFile('file.txt', 'utf8', print)
