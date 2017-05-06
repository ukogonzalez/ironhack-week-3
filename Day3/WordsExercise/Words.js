var words, message:
word = [
  "dead",
  "bygone",
  "landing",
  "cheaply",
  "assumed",
  "incorrectly",
  "attention",
  "agent",
];

// var words2 = [
//   "January", "lacks", "caveats",
//   "hazardous", "DOORS", "crying",
//   "arrogantly", "climate", "proponent",
//   "rebuttal"
// ]

message = decoder(words);
console.log(message);

function decoder (words) {
  var index = 0;
  var secretMessage = "";

  for (var i = 0; i < words.length; i++) {
    secretMessage += words[i].charAt(index);
    index = (index + 1) % 5;
  }
  // index++;
  // if( index + 1 === 5) {
  //   index = 0;
  // }
  return secretMessage;
}
