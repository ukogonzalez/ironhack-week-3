var decoder = require("./decoder.js")

var sentence1 = "Attack her nose under here with an itch"
var sentence2 = "Raul Nuñez call never finished"
var sentence3 = "Start rapping this or countless queasy wizards give back jay-z"
var sentence4 = "inner peace is overrated"
var sentence5 = "Fill the proper tank for the cow"

function super_decoder (sentence, type, forwards ){
  var forwards = forwards || false;
  var words = [];
  if (type === "every") {
    words = sentence.split(" ");
  }

  if (type === "even") {
    words = sentence.split(" ");
    words = words.filter(function(value, index){
      return index % 2 === 0
    });
  }

  if (type === "odd") {
    words = sentence.split(" ");
    words = words.filter(function(value, index){
      return index % 2 !== 0
    });
  }

  if (forwards){
    return decoder(words);
  }
}

console.log("lista de pares e impares")
var result10 = super_decoder(sentence1, "every", "forwards");
console.log(result10);
var result11 = super_decoder(sentence2, "every", "forwards");
console.log(result11);
var result12 = super_decoder(sentence3, "every", "forwards");
console.log(result12);
var result13 = super_decoder(sentence4, "every", "forwards");
console.log(result13);
var result14 = super_decoder(sentence5, "every", "forwards");
console.log(result14);

console.log("lista de pares")
var result = super_decoder(sentence1, "even", "forwards");
console.log(result);
var result2 = super_decoder(sentence2, "even", "forwards");
console.log(result2);
var result4 = super_decoder(sentence3, "even", "forwards");
console.log(result4);
var result6 = super_decoder(sentence4, "even", "forwards");
console.log(result6);
var result8 = super_decoder(sentence5, "even", "forwards");
console.log(result8);

console.log("lista de impares")
var result1 = super_decoder(sentence1, "odd", "forwards");
console.log(result1);
var result3 = super_decoder(sentence2, "odd", "forwards");
console.log(result3);
var result5 = super_decoder(sentence3, "odd", "forwards");
console.log(result5);
var result7 = super_decoder(sentence4, "odd", "forwards");
console.log(result7);
var result9 = super_decoder(sentence5, "odd", "forwards");
console.log(result9);

console.log("imprimiendo en reverse")
var result15 = sentence1.split(" ").reverse().join(" ");
var result16 = super_decoder(result15, "even", "forwards");
console.log(result16);
var result17 = sentence2.split(" ").reverse().join(" ");
var result18 = super_decoder(result17, "even", "forwards");
console.log(result18);
var result19 = sentence3.split(" ").reverse().join(" ");
var result20 = super_decoder(result19, "even", "forwards");
console.log(result20);
var result21 = sentence4.split(" ").reverse().join(" ");
var result22 = super_decoder(result21, "even", "forwards");
console.log(result22);
var result23 = sentence5.split(" ").reverse().join(" ");
var result24 = super_decoder(result23, "even", "forwards");
console.log(result24);
